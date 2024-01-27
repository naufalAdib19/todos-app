import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetIdCardService {
  private idCards!: String;

  setIdCards(newValue: String) {
    this.idCards = newValue;
  }

  getIdCards() {
    return this.idCards;
  }
}
