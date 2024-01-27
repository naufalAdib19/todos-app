import { Component } from '@angular/core';
import { GetIdCardService } from '../../../services/get-id-card';
import { NoteService } from '../../../services/note-service';
import { NotificationsService } from 'angular2-notifications';
import { finalize } from 'rxjs';

@Component({
  selector: 'delete-card-dialogs',
  standalone: true,
  imports: [],
  templateUrl: './delete-card-dialogs.component.html',
  styleUrl: './delete-card-dialogs.component.css',
})
export class DeleteCardDialogsComponent {
  constructor(
    private getIdCardService: GetIdCardService,
    private noteService: NoteService,
    private notificationService: NotificationsService
  ) {}

  getIdCardDeleted(): String {
    return this.getIdCardService.getIdCards();
  }

  onDeleteClick(): void {
    this.notificationService.warn(
      'Item on proses deleted!',
      'Click to undo...',
      {
        timeOut: 10000,
        clickToClose: true,
        showProgressBar: false,
      }
    );
    this.noteService
      .deleteNotes(this.getIdCardDeleted())
      .pipe(
        finalize(() => {
          this.notificationService.success(
            'Item deleted!',
            'Click to undo...',
            {
              timeOut: 2000,
              showProgressBar: true,
              clickToClose: true,
            }
          );
          setTimeout(() => {
            window.location.reload();
          }, 2500);
        })
      )
      .subscribe();
  }
}
