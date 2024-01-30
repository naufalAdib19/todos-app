import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../../services/note-service';
import { finalize } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Validators } from '@angular/forms';

@Component({
  selector: 'add-note-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, CommonModule],
  templateUrl: './add-note-form.component.html',
  styleUrl: './add-note-form.component.css',
})
export class AddNoteFormComponent {
  isLoading: boolean = false;
  noteForms = this.formBuilder.group({
    title: ['', [Validators.minLength(3), Validators.required]],
    type: ['', Validators.required],
    content: ['', Validators.required],
    dateFinished: ['', Validators.required],
    dateCreated: [new Date().toJSON().slice(0, 10)],
  });

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private notificationService: NotificationsService,
    private router: Router
  ) {}

  isFieldValid(fields: string): boolean | undefined {
    return (
      this.noteForms.get(`${fields}`)?.invalid &&
      (this.noteForms.get(`${fields}`)?.dirty ||
        this.noteForms.get(`${fields}`)?.touched)
    );
  }

  get validationForms() {
    let validationFields: any = {
      title: {
        theMessage: '',
        isValid: this.isFieldValid('title'),
      },
      type: {
        theMessage: '',
        isValid: this.isFieldValid('type'),
      },
      content: {
        theMessage: '',
        isValid: this.isFieldValid('content'),
      },
      dateFinished: {
        theMessage: '',
        isValid: this.isFieldValid('dateFinished'),
      },
    };

    Object.keys(this.noteForms.value).forEach((fields: any) => {
      const theError: any = this.noteForms.get(fields)?.errors;
      const theKeysOfError: string | null = Object.keys(theError || {})[0];
      let theMessage = '';
      if (theKeysOfError == 'required') {
        theMessage = 'Tidak boleh kosong!';
      } else if (theKeysOfError == 'minlength') {
        theMessage = 'Diperlukan 3 huruf!';
      }
      validationFields = {
        ...validationFields,
        [fields]: {
          ...validationFields[fields],
          theMessage: theMessage,
        },
      };
    });
    return validationFields;
  }

  triggerOnSubmit(): void {
    Object.keys(this.noteForms.value).map((fields) => {
      this.noteForms.get(fields)?.markAsTouched();
    });
  }

  onSubmitForm(): void {
    if (this.noteForms.invalid) {
      this.triggerOnSubmit();
    } else {
      this.isLoading = true;
      this.noteService
        .addNotes(this.noteForms.value)
        .pipe(
          finalize(() => {
            this.isLoading = false;
            this.notificationService.success('Item created!', 'Wait a second', {
              timeOut: 2000,
              showProgressBar: true,
              clickToClose: true,
            });
            setTimeout(() => {
              this.router.navigate(['']);
            }, 2500);
          })
        )
        .subscribe();
    }
  }
}
