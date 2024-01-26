import { Component } from '@angular/core';
import { NoteService } from '../../../services/note-service';
import { CardModels } from '../../../models/card-models';
import { OnInit, AfterViewInit, AfterContentInit } from '@angular/core';

type totalNotifType = {
  personalTotalNotif: number;
  workTotalNotif: number;
  hangoutTotalNotif: number;
};

@Component({
  selector: 'by-type-lists',
  templateUrl: './by-type-lists.component.html',
  styleUrl: './by-type-lists.component.css',
  standalone: true,
})
export class ByTypeListsComponent implements OnInit {
  noteList: CardModels[] = [];

  constructor(private noteService: NoteService) {}

  ngOnInit(): void {
    this.noteService.getNotes().subscribe((data) => {
      this.noteList = data;
    });
  }

  getTotalNotif(): totalNotifType {
    const dataNotif: totalNotifType = {
      personalTotalNotif: 0,
      hangoutTotalNotif: 0,
      workTotalNotif: 0,
    };

    this.noteList.forEach((data) => {
      if (data.type === 'personal') {
        dataNotif.personalTotalNotif++;
      } else if (data.type === 'work') {
        dataNotif.workTotalNotif++;
      } else if (data.type === 'hangout') {
        dataNotif.hangoutTotalNotif++;
      }
    });

    return dataNotif;
  }
}
