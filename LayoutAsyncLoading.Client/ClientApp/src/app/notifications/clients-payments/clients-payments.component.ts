import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { PaymentsNotification } from 'src/app/models/paymentsNotification';

@Component({
  selector: 'app-clients-payments',
  templateUrl: './clients-payments.component.html',
  styleUrls: ['./clients-payments.component.css']
})
export class ClientsPaymentsComponent implements OnInit {
  number: number;

  constructor(http: HttpClient) {
    http.get<PaymentsNotification>('https://localhost:5009/payments/count').subscribe(result => {
      this.number = result.count;
    }, error => console.error(error));
   }

  ngOnInit() {
  }


}
