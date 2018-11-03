import { TestBed, inject } from '@angular/core/testing';

import { QuestionService } from './question.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('QuestionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuestionService, HttpClient, HttpHandler]
    });
  });

  it('should be created', inject(
    [QuestionService],
    (service: QuestionService) => {
      expect(service).toBeTruthy();
    }
  ));
});
