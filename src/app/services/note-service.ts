import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CardModels } from '../models/card-models';

@Injectable({
  providedIn: 'root',
})
export class NoteService {
  private baseURL =
    'https://65b207879bfb12f6eafc9e18.mockapi.io/todos-app/notes';

  constructor(private http: HttpClient) {}

  getNotes(): Observable<CardModels[]> {
    return this.http.get<CardModels[]>(this.baseURL);
  }

  addNotes(datas: any) {
    return this.http.post(this.baseURL, datas);
  }
}
