import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { HomeText } from 'src/app/models/homeText';

@Component({
  selector: 'app-home-text',
  templateUrl: './home-text.component.html',
  styleUrls: ['./home-text.component.css']
})
export class HomeTextComponent implements OnInit {

  title: string;

  constructor(http: HttpClient) {
    http.get<HomeText>('https://localhost:5011/text/title').subscribe(result => {
      this.title = result.title;
    }, error => console.error(error));
   }

  ngOnInit() {
  }

}
