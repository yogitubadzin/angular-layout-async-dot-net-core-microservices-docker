import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { EventNotification } from 'src/app/models/eventNotification';

@Component({
  selector: 'app-clients-events',
  templateUrl: './clients-events.component.html',
  styleUrls: ['./clients-events.component.css']
})
export class ClientsEventsComponent implements OnInit {
  number: number;

  constructor(http: HttpClient) {
    http.get<EventNotification>('https://localhost:5005/events/count').subscribe(result => {
      this.number = result.count;
    }, error => console.error(error));
   }

  ngOnInit() {
  }

}
