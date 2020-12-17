import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-visits',
  templateUrl: './clients-visits.component.html',
  styleUrls: ['./clients-visits.component.css']
})
export class ClientsVisitsComponent implements OnInit {

  number: number;

  constructor() {
    this.number = 33;
   }

  ngOnInit() {
  }

}
