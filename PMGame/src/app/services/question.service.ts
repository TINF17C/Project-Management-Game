import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQuestion } from '../shared/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private serverURL = 'somestring';

  constructor(public http: HttpClient) {}

  getQuestions(): Observable<IQuestion[]> {
    this.http.get(this.serverURL).subscribe((data: IQuestion[]) => {
      return data;
    });
  }
}
