import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VisitsNotification } from 'src/app/models/visitsNotification';

@Component({
  selector: 'app-clients-visits',
  templateUrl: './clients-visits.component.html',
  styleUrls: ['./clients-visits.component.css']
})
export class ClientsVisitsComponent implements OnInit {

  number: number;

  constructor(http: HttpClient) {
    http.get<VisitsNotification>('https://localhost:5013/visits/count').subscribe(result => {
      this.number = result.count;
    }, error => console.error(error));
   }

  ngOnInit() {
  }

}
