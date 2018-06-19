import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { GameControllerService } from '../../services/game-controller.service';
import { IPlayer } from '../../shared/player.model';
import { Stages } from '../../shared/stages.enums';
import { StartDialogComponent } from '../../start-dialog/start-dialog.component';
import { WinnerDialogComponent } from '../../winner-dialog/winner-dialog.component';

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
  winnerDialogRef: MatDialogRef<WinnerDialogComponent>;

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
        this.players = this.controller.initNewPlayers(r);
        this.currentPlayer = 0;
      });
    });
  }

  bribe() {
    //this.controller.changePlayerTitle(this.players[this.currentPlayer], 0);
    this.controller.changePlayerMoney(
      this.players[this.currentPlayer],
      this.question.difficulty * -300
    );
    this.nextTurn();
  }

  submit() {
    if (
      this.question.options[this.question.correctAnswer - 1] ===
      this.selectedAnswer
    ) {
      //console.log("Correct!");
      this.controller.changePlayerTitle(this.players[this.currentPlayer], 1);
      this.controller.changePlayerMoney(
        this.players[this.currentPlayer],
        this.question.difficulty * 100
      );
    } else {
      //console.log("Wrong!");
      this.controller.changePlayerTitle(this.players[this.currentPlayer], -1);
      this.controller.changePlayerMoney(
        this.players[this.currentPlayer],
        this.question.difficulty * -100
      );
    }
    this.nextTurn();
  }

  nextTurn() {
    this.currentPlayer++;
    if (this.currentPlayer >= this.players.length) {
      this.currentPlayer = 0;
      this.controller.incrementStageCount(this.game);
      if (this.game.stage === 9) {
        let victoryPoints = new Array(this.players.length);
        this.winnerDialogRef = this.dialog.open(WinnerDialogComponent, {
          width: '400px',
          height: '400px'
        });
      }
    }
  }

  /*
  * To start the winnerdialog:
  * this.winnerDialogRef = this.dialog.open(WinnerDialogComponent{
        width: '400px',
        height: '400px'
      });
  */
}
