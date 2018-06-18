import { Component, OnInit, AfterViewInit } from '@angular/core';
import { GameControllerService } from '../../services/game-controller.service';
import { IPlayer } from '../../shared/player.model';
import { Stages } from '../../shared/stages.enums';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
  // game object
  game = {
    stage: 0,
    progress: 0
  };

  // player objects
  players: IPlayer[];

  // progress bar view
  color = 'primary';
  mode = 'determinate';
  progressBarValue: number;

  currentStage: number;
  stages = Stages.keys();

  question = {
    question: 'Was ist der Sinn des Lebens?',
    options: ['42', 'Gutes Essen', 'Gott', 'Feder'],
    correctAnswer: 'Gutes Essen'
  };
  selectedAnswer: string;

  constructor(public controller: GameControllerService) {}

  ngOnInit() {}

  initPlayers(playerCount: number): void {
    this.players = this.controller.initNewPlayers(playerCount);
  }

  hey() {
    this.controller.changePlayerTitle(this.players[2], 7);
  }
  dd() {
    this.controller.incrementStageCount(this.game);
  }
}
