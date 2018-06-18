import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeMenuComponent } from './views/home/components/home-menu/home-menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from './material.module';
import { HomeComponent } from './views/home/home.component';
import { GameComponent } from './views/game/game.component';
import { PlayerComponent } from './views/game/components/player/player.component';
import { StartDialogComponent } from './start-dialog/start-dialog.component';

@NgModule({
  declarations: [
    HeaderComponent,
    AppComponent,
    HomeComponent,
    FooterComponent,
    HomeMenuComponent,
    GameComponent,
    PlayerComponent,
    StartDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  entryComponents: [StartDialogComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
