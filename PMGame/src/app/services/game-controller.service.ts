import { Injectable } from '@angular/core';
import { Jobtitles } from '../shared/jobtitles.enums';
import { Stages } from '../shared/stages.enums';
import { IPlayer } from '../shared/player.model';
import { IGame } from '../shared/game.model';

@Injectable({
  providedIn: 'root'
})
export class GameControllerService {
  constructor() {}

  /**
   * Sets the name of a player.
   *
   * @param player Player Object
   * @param name name
   */
  setPlayerName(player: IPlayer, name: string): IPlayer {
    player.player = name;
    return player;
  }

  /**
   * Sets the amount of money to a set value.
   * @param player Player Object
   * @param money set amount of money;
   */
  setPlayerMoney(player: IPlayer, money: number): IPlayer {
    player.money = money;
    return player;
  }

  /**
   * Changes the amount of money.
   *
   * @param player Player Object
   * @param amount how much money the player loses or receives
   */
  changePlayerMoney(player: IPlayer, amount: number): IPlayer {
    player.money += amount;
    return player;
  }

  /**
   * Sets the Jobtitle.
   *
   * @param player Player Object
   * @param titleCode A number correspionding to the Jobtitle beginning at 0.
   */
  setPlayerTitle(player: IPlayer, titleCode: number): IPlayer {
    player.titleCode = titleCode;
    player.title = Jobtitles[titleCode];
    player.progress = (titleCode + 1) * (100 / Jobtitles.length());
    return player;
  }

  /**
   * Moves an Player up/down the carrier ladder.
   *
   * @param player Player Object
   * @param difference how many positions the player moves up / down
   */
  changePlayerTitle(player: IPlayer, difference: number): IPlayer {
    if (player.titleCode + difference >= 0) {
      player.titleCode += difference;
      player.title = Jobtitles[player.titleCode];
      player.progress += (difference + 1) * (100 / Jobtitles.length());
    } else {
      // Player === noob
    }
    return player;
  }

  /**
   * Creates Player Objects
   *
   * @param playerCount count of player to be initiated
   */
  initNewPlayers(playerCount: number): IPlayer[] {
    const players = [];
    for (let i = 0; i < playerCount; i++) {
      players.push({
        id: i,
        player: 'Spieler ' + (i + 1),
        title: Jobtitles[0],
        titleCode: 0,
        money: 0,
        progress: 0
      });
    }
    // document.getElementById('grid').appendChild(``)
    return players;
  }

  /**
   * Moves the internal game stage state and the view progress bar by one.
   *
   * @param game Game Object
   */
  incrementStageCount(game: IGame): IGame {
    game.stage += 1;
    game.progress += 100 / Stages.length();
    return game;
  }
}
