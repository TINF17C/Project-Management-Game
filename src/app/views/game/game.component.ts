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
import { Router, RouterStateSnapshot } from '@angular/router';

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
    public snackBar: MatSnackBar,
    public router: Router
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
    /**
     * This fixes a bug that occurs in Angular Development Mode only.
     * This bug occrs, because checkView() is performed twice.
     */
    setTimeout(() => {
      this.startDialogRef = this.dialog.open(StartDialogComponent, {
        width: '400px',
        height: '400px'
      });

      this.startDialogRef.afterClosed().subscribe((r) => {
        this.players = this.controller.initNewPlayers(r);
        if (this.players.length === 0 && this.router.url !== '/rules') {
          this.router.navigate(['']);
        }
        this.currentPlayer = 0;
        this.isGameOver = false;
      });
    });
  }

  /**
   * This function helps guard against unwated navigations,
   * which would lead to information loss.
   */
  @HostListener('window:beforeunload')
  canDeactivate(): Observable<boolean> | boolean {
    if (this.isGameOver || this.players === undefined) {
      return true;
    }
    if (this.players.length === 0) {
      return true;
    }
    return false;
  }

  /**
   * When you click the bribe button this function is executed. It reduces money, keeps the rank and ends the turn.
   */
  bribe() {
    if (this.isGameOver) {
      // console.log(this.players[0]);
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
      this.getCurrentPlayer().money >= this.question.schwierigkeitsgrad * 200
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
      victoryPoints[i] =
        this.players[i].money + this.players[i].titleCode * 400;
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

  /**
   * Returns the actual css width of the building.
   * Makes building responsive.
   */
  getTowerWidth(): number {
    return document.getElementById('tower').offsetWidth * 0.975;
  }

  /**
   * Returns the position of a player in the building based on their job title.
   *
   * @param index Player index starting at 1(!)
   * @param query dispicts the propertie the function should calculate
   */
  getPlayerPosition(index: number, query: String): number {
    const towerWidth = this.getTowerWidth();

    if (query === 'top') {
      const base = towerWidth * 2 - ((index - 1) % 2) * 25;

      switch (this.players[index - 1].titleCode) {
        case 0:
          return index * 20 + towerWidth * 2.17 * 0.75;
        case 1:
          return base;
        case 2:
          return base - towerWidth * (1 / 7);
        case 3:
          return base - towerWidth * 2.17 * 0.25;
        case 4:
          return base - towerWidth * 2.17 * 0.25 - towerWidth * (1 / 7);
        case 5:
          return base - towerWidth * 2.17 * 0.5;
        case 6:
          return base - towerWidth * 2.17 * 0.5 - towerWidth * (1 / 7);
        case 7:
          return base - towerWidth * 2.17 * 0.75;
        case 8:
          return base - towerWidth * 2.17 * 0.75 - towerWidth * (1 / 7);
      }
    } else if (query === 'left') {
      switch (this.players[index - 1].titleCode) {
        case 0:
          return -30;
        case 1:
        case 4:
        case 5:
        case 8:
          if (index < 3) {
            return towerWidth * 0.25 - 15;
          } else {
            return towerWidth * 0.25 + 15;
          }
        case 2:
        case 3:
        case 6:
        case 7:
          if (index < 3) {
            return towerWidth * 0.75 - 15;
          } else {
            return towerWidth * 0.75 + 15;
          }
      }
    }
  }
}
