import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-rules',
  templateUrl: './rules.component.html',
  styleUrls: ['./rules.component.scss']
})
export class RulesComponent implements OnInit {
  constructor() {}

  step = 0;

  ngOnInit() {}

  /**
   *
   * @param index Sets the current step counter to the given Index.
   *
   */
  setStep(index: number) {
    this.step = index;
  }

  /**
   * Increases the step count.
   */
  nextStep() {
    this.step++;
  }

  /**
   * Decreases the step count.
   */
  prevStep() {
    this.step--;
  }
}
