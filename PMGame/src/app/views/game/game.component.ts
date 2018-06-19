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
  ) {
    this.currentPlayer = 0;
  }

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.startDialogRef = this.dialog.open(StartDialogComponent, {
        width: '400px',
        height: '400px'
      });

      this.startDialogRef.afterClosed().subscribe((r) => {
        this.players = this.controller.initNewPlayers(r);
      });
    });
  }

  /**
   * Handles the bribe functionality.
   * For now money is removed from the player.
   */
  bribe() {

    if(this.isGameOver()) {
      // TODO: Show winner dialog.
      alert("Game Over!");
      return;
    }

    var player = this.getCurrentPlayer();
    player.money -= 100;


    this.update();
  }

  /**
   * Handles the game logic for the OK button.
   */
  submit() {

    // TODO: Check if any answer is selected.

    if(this.isGameOver()) {
      // TODO: Show winner dialog.
      alert("Game Over!");
      return;
    }
    
    if(this.isCorrectAnswer()) {
      this.rewardCurrentPlayer();
    } else {
      alert("Sorry, wrong answer!");
    }

    
    this.update();
  }

  /**
   * Switches to the next turn.
   */
  update() {
    this.currentPlayer++;
    if(this.currentPlayer >= this.players.length) {
      this.currentPlayer = 0;
      this.controller.incrementStageCount(this.game);
    }

    this.selectNextQuestion();
  }

  /**
   * Checks if the player has answered the current question correctly.
   */
  isCorrectAnswer() : boolean {
    return this.selectedAnswer === this.question.options[this.question.correctAnswer - 1];
  }

  /**
   * Rewards the active player based on the question and its difficulty.
   */
  rewardCurrentPlayer() {
    var currentPlayer = this.getCurrentPlayer();
    var newMoney = currentPlayer.money + this.question.difficulty * 100;
    this.controller.setPlayerMoney(currentPlayer, newMoney);
  }

  /**
   * Returns the current player.
   */
  getCurrentPlayer() : IPlayer {
    return this.players[this.currentPlayer];
  }

  /**
   * Selects the next question.
   */
  selectNextQuestion() {
    //  TODO
    //  this.question = ...
  }

  /**
   * Checks whether the game is over.
   */
  isGameOver() : boolean {
    return this.game.stage === this.stages.length - 1;
  }

  /*
  * To start the winnerdialog:
  * this.winnerDialogRef = this.dialog.open(WinnerDialogComponent{
        width: '400px',
        height: '400px'
      });
  */
}
