import { Component, OnInit, Input } from '@angular/core';

import { IPlayer } from '../../../shared/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  @Input() player: IPlayer;

  // Progress Bars
  color = 'primary';
  mode = 'determinate';

  constructor() {}

  ngOnInit() {}
}
