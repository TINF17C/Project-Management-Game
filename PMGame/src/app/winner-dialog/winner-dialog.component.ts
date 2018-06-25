import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-winner-dialog',
  templateUrl: './winner-dialog.component.html',
  styleUrls: ['./winner-dialog.component.scss']
})


export class WinnerDialogComponent implements OnInit {
  
  
  constructor(
    @Inject(MAT_DIALOG_DATA) public winnerName: string,
    public dialogRef: MatDialogRef<WinnerDialogComponent>
  ) { }
  
  ngOnInit() { }


  onClickOk() {
    this.dialogRef.close();
  }

}
