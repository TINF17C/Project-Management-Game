import { Component, OnInit, Input } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

@Component({
  selector: 'app-start-dialog',
  templateUrl: './start-dialog.component.html',
  styleUrls: ['./start-dialog.component.scss']
})
export class StartDialogComponent implements OnInit {
  form: FormGroup;

  @Input() numberOfPlayers: number;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<StartDialogComponent>
  ) {}

  ngOnInit() {
    this.form = this.formBuilder.group({
      numberOfPlayers: new FormControl()
    });
  }

  /**
   *
   * @param form The form to be submitted.
   *
   * This Function submits the numbersOfPlayers from the form to the GameComponent.
   */
  submit(form) {
    this.dialogRef.close(`${form.value.numberOfPlayers}`);
  }
}
