import { AfterViewInit, Component, OnInit, HostListener } from '@angular/core';
import { MatDialogRef, MatSnackBar } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { GameControllerService } from '../../services/game-controller.service';
import { IPlayer } from '../../shared/player.model';
import { Stages } from '../../shared/stages.enums';
import { StartDialogComponent } from '../../start-dialog/start-dialog.component';
import { WinnerDialogComponent } from '../../winner-dialog/winner-dialog.component';
import { QuestionService } from '../../services/question.service';
import { IQuestion } from '../../shared/question.model';
import { Observable } from 'rxjs';

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
  isGameOver: boolean;

  // progress bar view
  color = 'primary';
  mode = 'determinate';

  currentStage: number;
  stages = Stages.keys();

  question = {
    id: 0,
    Frage: '',
    Ersetzungssatz: '',
    Antwort1: '',
    Antwort2: '',
    Antwort3: '',
    Antwort4: '',
    richtig: 0,
    schwierigkeitsgrad: 0
  };

  questionText = '';
  questionOptions = [];
  questions: IQuestion[];

  showingAnswer = false;

  selectedAnswer: string;

  trash = [];

  startDialogRef: MatDialogRef<StartDialogComponent>;
  winnerDialogRef: MatDialogRef<WinnerDialogComponent>;

  constructor(
    public questionService: QuestionService,
    public controller: GameControllerService,
    public dialog: MatDialog,
    public snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.questionService.getQuestions().subscribe(
      (res: IQuestion[]) => {
        this.questions = res;
        this.fetchNewQuestion();
      },
      (err) => console.error(err)
    );
  }

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

  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    if (this.isGameOver) {
      return true;
    }
    return false;
  }

  /**
   * When you click the bribe button this function is executed. It reduces money, keeps the rank and ends the turn.
   */
  bribe() {
    //  TODO: Check if any answer is selected.

    if (this.isGameOver) {
      // TODO: Show Game Over dialog. Maybe start a new game?
      this.snackBar.open('Das Spiel ist bereits beendet.', 'Schade', {
        duration: 3000
      });
      return;
    }

    if (!this.isAbleToBribe()) {
      //  TODO: Show some dialog.
      this.snackBar.open('Du hast nicht genug Geld!', 'Schade', {
        duration: 3000
      });
      return;
    }

    this.snackBar.open('Der Spielleiter akzeptiert dein Angebot...', 'Psst.', {
      duration: 3000
    });
    this.punishCurrentPlayer(200, false);
    this.nextTurn();
  }

  /**
   * When you click the "OK" button this function is executed. It checks if the answer is correct, adds or reduces money
   * and title and ends the turn.
   */
  submit() {
    // //  TODO: Check if any answer is selected.

    if (this.isGameOver) {
      // TODO: Show Game Over dialog. Maybe start a new game?
      this.snackBar.open('Das Spiel ist bereits beendet.', 'Schade', {
        duration: 3000
      });
      return;
    }

    if (this.isCorrectAnswer()) {
      this.rewardCurrentPlayer(100);
    } else {
      //  TODO: Show punishment dialog.
      this.punishCurrentPlayer(100, true);
    }

    this.showingAnswer = true;
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

    this.showingAnswer = false;

    this.fetchNewQuestion();
  }

  /**
   * Returns the current player.
   */
  getCurrentPlayer(): IPlayer {
    return this.players[this.currentPlayer];
  }

  /**
   * Checks if the correct answer is selected.
   * Note: Does not check whether no answer is selected!
   */
  isCorrectAnswer(): boolean {
    return (
      this.selectedAnswer === this.questionOptions[this.question.richtig - 1]
    );
  }

  /**
   * Checks if the player has enough money to bribe.
   */
  isAbleToBribe(): boolean {
    return (
      this.getCurrentPlayer().money >= this.question.schwierigkeitsgrad * 300
    );
  }

  /**
   * Rewards the current player according to the questions difficulty.
   * @param factor Multiplication factor for the questions difficulty.
   */
  rewardCurrentPlayer(factor: number) {
    const player = this.getCurrentPlayer();
    const reward = this.question.schwierigkeitsgrad * factor;

    this.controller.changePlayerTitle(player, 1);
    this.controller.changePlayerMoney(player, reward);
  }

  /**
   * Punishes the current player.
   * @param factor The multiplication factor for the questions difficulty. It is negated automatically.
   * @param changeTitle Determines whether the title of the player should be reduced too.
   */
  punishCurrentPlayer(factor: number, changeTitle: boolean) {
    const player = this.getCurrentPlayer();
    const punishment = this.question.schwierigkeitsgrad * factor * -1;

    if (changeTitle) {
      this.controller.changePlayerTitle(player, -1);
    }

    this.controller.changePlayerMoney(player, punishment);
  }

  /**
   * This function is supposed to fetch a new question from the database.
   */
  fetchNewQuestion() {
    this.questionOptions = [];
    let number = Math.round(Math.random() * (this.questions.length - 1));
    if (this.trash.includes(number)) {
      this.fetchNewQuestion();
    } else {
      this.trash.push(number);
      this.question = this.questions[number];
      number = Math.floor(Math.random() * 3) + 1;
      if (number === 1) {
        this.questionText = this.question.Ersetzungssatz;
      } else {
        this.questionText = this.question.Frage;
      }
      this.questionOptions.push(this.question.Antwort1);
      this.questionOptions.push(this.question.Antwort2);
      this.questionOptions.push(this.question.Antwort3);
      this.questionOptions.push(this.question.Antwort4);
    }
  }

  /**
   * This function checks who the winner is, hands that information to the winner-dialog and displays that.
   */
  gameEnds() {
    this.isGameOver = true;
    let winnerString = '';

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
        winnerName: winnerString
      },
      width: '400px',
      height: '400px'
    });
  }

  /*
  * To start the winnerdialog:
  * winningPlayer = 'Herbert';
  * this.winnerDialogRef = this.dialog.open(WinnerDialogComponent, {
      width: '400px',
      height: '400px',
      data: {
        winningPlayer: this.winningPlayer
      }
    });
  *
  */
}
