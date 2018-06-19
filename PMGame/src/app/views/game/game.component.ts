import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { GameControllerService } from '../../services/game-controller.service';
import { IPlayer } from '../../shared/player.model';
import { Stages } from '../../shared/stages.enums';
import { StartDialogComponent } from '../../start-dialog/start-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  // game object
  game = {
    stage: 0,
    progress: 0
  };

  // player objects
  players: IPlayer[];
  currentPlayer: number;

  // progress bar view
  color = 'primary';
  mode = 'determinate';

  currentStage: number;
  stages = Stages.keys();

  question = {
    question: 'Was ist der Sinn des Lebens?',
    options: ['42', 'Gutes Essen', 'Gott', 'Feder'],
    correctAnswer: 2,
    difficulty: 1
  };
  selectedAnswer: string;

  startDialogRef: MatDialogRef<StartDialogComponent>;

  constructor(
    public controller: GameControllerService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.startDialogRef = this.dialog.open(StartDialogComponent, {
        width: '400px',
        height: '400px'
      });

      this.startDialogRef.afterClosed().subscribe((r) => {
        this.initPlayers(r);
      });
    });
  }

  initPlayers(playerCount: number): void {
    this.players = this.controller.initNewPlayers(playerCount);
    this.currentPlayer = 0;
  }

  bribe() {
    this.controller.changePlayerMoney(
      this.players[this.currentPlayer],
      this.question.difficulty * -300
    );
    //this.controller.changePlayerTitle(this.players[this.currentPlayer], 1);
    this.nextTurn();
  }

  submit() {
    if (
      this.question.options[this.question.correctAnswer - 1] ===
      this.selectedAnswer
    ) {
      this.controller.changePlayerMoney(
        this.players[this.currentPlayer],
        this.question.difficulty * 100
      );
      this.controller.changePlayerTitle(this.players[this.currentPlayer], 1);
      this.nextTurn();
      //console.log(this.players[this.currentPlayer].id);
    } else {
      this.controller.changePlayerMoney(
        this.players[this.currentPlayer],
        this.question.difficulty * -100
      );
      this.controller.changePlayerTitle(this.players[this.currentPlayer], -1);
      this.nextTurn();
    }
  }

  nextTurn() {
    this.currentPlayer++;
    if (this.currentPlayer >= this.players.length) {
      //Gehe zu Spieler 1 und setze die Stage um 1 rauf
      this.currentPlayer = 0;
      this.controller.incrementStageCount(this.game);
    }
  }
}
