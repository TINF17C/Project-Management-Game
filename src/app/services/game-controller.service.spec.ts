import { TestBed, inject } from '@angular/core/testing';

import { GameControllerService } from './game-controller.service';

describe('GameControllerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GameControllerService]
    });
  });

  it('should be created', inject(
    [GameControllerService],
    (service: GameControllerService) => {
      expect(service).toBeTruthy();
    }
  ));
});
