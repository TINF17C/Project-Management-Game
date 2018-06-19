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
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatExpansionModule } from '@angular/material/expansion';

@NgModule({
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule
  ],
  exports: [
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatProgressBarModule,
    MatIconModule,
    MatListModule,
    MatRadioModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatExpansionModule
  ]
})
export class MaterialModule {}
