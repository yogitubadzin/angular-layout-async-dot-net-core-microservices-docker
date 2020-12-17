import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clients-payments',
  templateUrl: './clients-payments.component.html',
  styleUrls: ['./clients-payments.component.css']
})
export class ClientsPaymentsComponent implements OnInit {
  number: number;

  constructor() {
    this.number = 8;
   }

  ngOnInit() {
  }


}
