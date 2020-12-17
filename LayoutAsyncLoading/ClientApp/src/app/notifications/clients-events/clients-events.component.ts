import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-events',
  templateUrl: './clients-events.component.html',
  styleUrls: ['./clients-events.component.css']
})
export class ClientsEventsComponent implements OnInit {
  number: number;

  constructor() {
    this.number = 5;
   }

  ngOnInit() {
  }

}
