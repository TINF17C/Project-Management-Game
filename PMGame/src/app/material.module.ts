/*
    This file imports and exports all the components from Angular Material.
    This is done to keep the import statements in the project to a minimum.
*/

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Declares the Material Modules we want to use
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
    imports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatListModule,
        MatProgressBarModule
    ],
    exports: [
        MatButtonModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatTableModule,
        MatListModule,
        MatProgressBarModule
    ]
})
export class MaterialModule {}
