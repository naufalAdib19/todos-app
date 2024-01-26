import { Component } from '@angular/core';
import { AddNoteFormComponent } from '../../organisms/add-note-form/add-note-form.component';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-note-pages',
  standalone: true,
  imports: [AddNoteFormComponent],
  templateUrl: './add-note-pages.component.html',
  styleUrl: './add-note-pages.component.css',
})
export class AddNotePagesComponent {}
