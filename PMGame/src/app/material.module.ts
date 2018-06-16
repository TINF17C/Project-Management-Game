/*
    This file imports and exports all the components from Angular Material.
    This is done to keep the import statements in the project to a minimum.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declares the Material Modules we want to use
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRadioModule } from '@angular/material/radio';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatProgressBarModule,
    MatCardModule,
    MatRadioModule
  ]
})
export class MaterialModule {}
