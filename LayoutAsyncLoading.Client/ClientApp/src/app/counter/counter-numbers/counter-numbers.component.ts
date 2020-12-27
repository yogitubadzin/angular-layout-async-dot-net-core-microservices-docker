import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-numbers',
  templateUrl: './counter-numbers.component.html',
  styleUrls: ['./counter-numbers.component.css']
})
export class CounterNumbersComponent implements OnInit {
  public currentCount = 0;

  public incrementCounter() {
    this.currentCount++;
  }

  ngOnInit() {
  }
}
