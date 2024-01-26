import { Component, Input } from '@angular/core';
import { CardModels, CardActions } from '../../../models/card-models';

@Component({
  selector: 'card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css',
})
export class CardComponent implements CardModels, CardActions {
  @Input() title!: String;
  @Input() content!: String;
  @Input() type!: String;
  @Input() dateCreated!: Date;
  @Input() dateFinished!: Date;
  @Input() id!: String;

  convertDateToString(): String {
    return new Date(this.dateCreated).toDateString();
  }

  getBgColor(): String {
    const typeNotes = {
      personal: 'bg-sky-50',
      work: 'bg-rose-50',
      hangout: 'bg-amber-50',
    };
    return typeNotes[this.type as keyof typeof typeNotes];
  }

  onDeleteClick(): void {}

  onDetailClidk(): void {}

  onUpdateClick(): void {}
}
