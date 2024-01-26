import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../molecules/card/card.component';
import { CardModels } from '../../../models/card-models';
import { NoteService } from '../../../services/note-service';
import { finalize, pipe } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'note-list',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './note-list.component.html',
  styleUrl: './note-list.component.css',
})
export class NoteListComponent implements OnInit {
  cardList: CardModels[] = [];
  isLoading: boolean = true;

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService
      .getNotes()
      .pipe(
        finalize(() => {
          this.isLoading = false;
        })
      )
      .subscribe((notes) => {
        this.cardList = notes;
      });
  }
}
