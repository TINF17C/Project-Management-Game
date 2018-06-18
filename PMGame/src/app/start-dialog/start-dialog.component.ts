import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-start-dialog',
  templateUrl: './start-dialog.component.html',
  styleUrls: ['./start-dialog.component.scss']
})
export class StartDialogComponent implements OnInit {
  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<StartDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      filename: ''
    });
  }

  submit(form) {
    this.dialogRef.close(`${form.value.NumberOfPlayers}`);
  }
}
