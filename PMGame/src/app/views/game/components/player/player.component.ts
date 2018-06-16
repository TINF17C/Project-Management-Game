import { Component, OnInit } from '@angular/core';

import { IPlayer } from '../../../../shared/player.model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.scss']
})
export class PlayerComponent implements OnInit {
  constructor() {}
  player = {
    'name': 'Player 1',
    'position': 'Trainee',
    'money': '1000'
  };

  ngOnInit() {}

}

