import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';
import { IWinnerName } from '../shared/winnerName.model';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})
export class WinnerDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public winnerName: IWinnerName,
    public dialogRef: MatDialogRef<WinnerDialogComponent>
  ) {}

  ngOnInit() {}

  /**
   * Force closes the dialog.
   */
  closeDialog() {
    this.dialogRef.close();
  }
}
