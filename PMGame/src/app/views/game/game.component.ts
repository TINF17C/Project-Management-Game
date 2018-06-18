import { Component, OnInit, AfterViewInit } from '@angular/core';
import { IQuestion } from './../../shared/question.model';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material';
import { StartDialogComponent } from '../../start-dialog/start-dialog.component';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit, AfterViewInit {
  // progress bar
  color = 'primary';
  mode = 'determinate';
  value: number;

  currentStage = 4;

  stages = [
    {
      name: 1,
      value: 1
    },
    {
      name: 2,
      value: 2
    },
    {
      name: 3,
      value: 3
    },
    {
      name: 4,
      value: 4
    },
    {
      name: 5,
      value: 5
    },
    {
      name: 6,
      value: 6
    },
    {
      name: 7,
      value: 7
    },
    {
      name: 8,
      value: 8
    }
  ];

  question = {
    question: 'Was ist der Sinn des Lebens?',
    options: ['42', 'Gutes Essen', 'Gott', 'Feder'],
    correctAnswer: 'Gutes Essen'
  };
  selectedAnswer: string;

  startDialogRef: MatDialogRef<StartDialogComponent>;

  constructor(public dialog: MatDialog) {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.startDialogRef = this.dialog.open(StartDialogComponent, {
      width: '400px',
      height: '400px'
    });
  }
}
