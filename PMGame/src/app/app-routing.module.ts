import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { AboutComponent } from './views/about/about.component';
import { RulesComponent } from './views/rules/rules.component';
import { CanDeactivateGuard } from './shared/canDeactivate.class';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'game',
    component: GameComponent,
    canDeactivate: [CanDeactivateGuard]
  },
  {
    path: 'rules',
    component: RulesComponent
  },
  {
    path: 'impressum',
    component: HomeComponent
  },
  {
    path: 'about',
    component: AboutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
