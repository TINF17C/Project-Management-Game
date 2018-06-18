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

  // progress bar view
  color = 'primary';
  mode = 'determinate';

  currentStage: number;
  stages = Stages.keys();

  question = {
    question: 'Was ist der Sinn des Lebens?',
    options: ['42', 'Gutes Essen', 'Gott', 'Feder'],
    correctAnswer: 'Gutes Essen'
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
  }
}
