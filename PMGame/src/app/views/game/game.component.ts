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
  isGameOver : boolean;

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
  ) { }

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
        this.isGameOver = false;
      });
    });
  }

  /**
   * When you click the bribe button this function is executed. It reduces money, keeps the rank and ends the turn.
   */
  bribe() {

    //  TODO: Check if any answer is selected.

    if(this.isGameOver) {
      // TODO: Show Game Over dialog. Maybe start a new game?
      alert("Game is already over!");
      return;
    }

    if(!this.isAbleToBribe()) {
      //  TODO: Show some dialog.
      alert("Cannot bribe! Not enough money.");
      return;
    }


    this.punishCurrentPlayer(300, false);
    this.nextTurn();
  }

  /**
   * When you click the "OK" button this function is executed. It checks if the answer is correct, adds or reduces money
   * and title and ends the turn.
   */
  submit() {

    //  TODO: Check if any answer is selected.

    if(this.isGameOver) {
      // TODO: Show Game Over dialog. Maybe start a new game?
      alert("Game is already over!");
      return;
    }

    if (this.isCorrectAnswer()) {
      this.rewardCurrentPlayer(100);
    } else {
      //  TODO: Show punishment dialog.
      this.punishCurrentPlayer(100, true);
    }

    this.nextTurn();
  }

  /**
   * This function ends the turn, makes the next player the active player, ends the gameRound if necessary and fetches a
   * new question from the database.
   */
  nextTurn() {
    this.currentPlayer++;
    if (this.currentPlayer >= this.players.length) {
      this.currentPlayer = 0;
      this.controller.incrementStageCount(this.game);
      if (this.game.stage === this.stages.length) {
        this.gameEnds();
      }
    }

    this.fetchNewQuestion();
  }

  /**
   * Returns the current player.
   */
  getCurrentPlayer() : IPlayer {
    return this.players[this.currentPlayer];
  }

  /**
   * Checks if the correct answer is selected.
   * Note: Does not check whether no answer is selected!
   */
  isCorrectAnswer() : boolean {
    return this.question.options[this.question.correctAnswer - 1] === this.selectedAnswer;
  }

  /**
   * Checks if the player has enough money to bribe.
   */
  isAbleToBribe() : boolean {
    return this.getCurrentPlayer().money >= this.question.difficulty * 300;
  }

  /**
   * Rewards the current player according to the questions difficulty.
   * @param factor Multiplication factor for the questions difficulty.
   */
  rewardCurrentPlayer(factor: number) {
    let player = this.getCurrentPlayer();
    let reward = this.question.difficulty * factor;

    this.controller.changePlayerTitle(player, 1);
    this.controller.changePlayerMoney(player, reward);
  }

  /**
   * Punishes the current player.
   * @param factor The multiplication factor for the questions difficulty. It is negated automatically.
   * @param changeTitle Determines whether the title of the player should be reduced too.
   */
  punishCurrentPlayer(factor: number, changeTitle: boolean) {
    let player = this.getCurrentPlayer();
    let punishment = this.question.difficulty * -factor;

    if(changeTitle)
      this.controller.changePlayerTitle(player, -1);

    this.controller.changePlayerMoney(player, punishment);
  }

  /**
   * This function is supposed to fetch a new question from the database.
   */
  fetchNewQuestion() {
    // TODO: Get a new question from the database and fill this.question in the correct way with it.
  }

  /**
   * This function checks who the winner is, hands that information to the winner-dialog and displays that.
   */
  gameEnds() {

    this.isGameOver = true;
    let winnerString = "";


    const victoryPoints = new Array(this.players.length);
    let highestPoints = 0;
    for (let i = 0; i < this.players.length; i++) {
      victoryPoints[i] = this.players[i].money * this.players[i].titleCode;
      if (highestPoints < victoryPoints[i]) {
        highestPoints = victoryPoints[i];
      }
    }
    let firstVictor = true;
    for (let i = 0; i < this.players.length; i++) {
      if (victoryPoints[i] === highestPoints) {
        if (firstVictor) {
          firstVictor = false;
          winnerString = this.players[i].player;
        } else {
          winnerString = winnerString + ', ' + this.players[i].player;
        }
      }
    }

    // TODO: pass winnerString to the dialog somehow. This should happen here.
    this.winnerDialogRef = this.dialog.open(WinnerDialogComponent, {
      data: {
        winnerName: "Hallo"
      },
      width: '400px',
      height: '400px'
    });


  }


}
