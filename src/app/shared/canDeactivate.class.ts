import {
  CanDeactivate,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface ComponentCanDeactivate {
  canDeactivate: () => boolean | Observable<boolean>;
}

@Injectable()
export class CanDeactivateGuard
  implements CanDeactivate<ComponentCanDeactivate> {
  /*
  *
  * This class is used to manage cases wehere users might want to move navigate away from the game class.
  * If navigating away from the Component is not recommended it will alert the user.
  */
  canDeactivate(
    component: ComponentCanDeactivate,
    currentRoute: ActivatedRouteSnapshot,
    currentState: RouterStateSnapshot,
    nextState?: RouterStateSnapshot
  ): boolean | Observable<boolean> {
    if (nextState.url === '/start') {
      return component.canDeactivate();
    } else {
      return component.canDeactivate()
        ? true
        : confirm('Möchtest du wirklich das Spiel verlassen?');
    }
  }
}
