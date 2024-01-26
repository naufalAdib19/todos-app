import { Component } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NoteService } from '../../../services/note-service';
import { finalize } from 'rxjs';
import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'add-note-form',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './add-note-form.component.html',
  styleUrl: './add-note-form.component.css',
})
export class AddNoteFormComponent {
  isLoading: boolean = false;
  noteForms = this.formBuilder.group({
    title: [''],
    type: [''],
    content: [''],
    dateFinished: [''],
    dateCreated: [new Date().toJSON().slice(0, 10)],
  });

  constructor(
    private formBuilder: FormBuilder,
    private noteService: NoteService,
    private notificationService: NotificationsService,
    private router: Router
  ) {}

  onSubmitForm(): void {
    this.isLoading = true;
    this.noteService
      .addNotes(this.noteForms.value)
      .pipe(
        finalize(() => {
          this.isLoading = false;
          this.notificationService.success(
            'Item created!',
            'Click to undo...',
            {
              timeOut: 2000,
              showProgressBar: true,
              clickToClose: true,
            }
          );
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2500);
        })
      )
      .subscribe((res) => {
        console.log(res);
      });
  }
}
