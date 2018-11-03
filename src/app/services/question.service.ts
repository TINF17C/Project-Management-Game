import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IQuestion } from '../shared/question.model';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  private serverURL = 'https://pmgame.sxy.one/api/';

  constructor(private http: HttpClient) {}

  getQuestions(): Observable<IQuestion[]> {
    return this.http.get<IQuestion[]>(this.serverURL);
  }

  // private convertArrayResponse(
  //   res: HttpResponse<IQuestion[]>
  // ): HttpResponse<IQuestion[]> {
  //   const jsonResponse: IQuestion[] = res.body;
  //   const body: IQuestion[] = [];
  //   for (let i = 0; i < jsonResponse.length; i++) {
  //     body.push(this.convertItemFromServer(jsonResponse[i]));
  //   }
  //   return res.clone({ body });
  // }

  // private convertItemFromServer(blog: IQuestion): IQuestion {
  //   const copy: IQuestion = Object.assign({}, blog);
  //   return copy;
  // }
}
