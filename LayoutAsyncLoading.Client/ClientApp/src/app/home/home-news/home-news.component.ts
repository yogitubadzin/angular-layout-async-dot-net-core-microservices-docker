import { HomeNews } from './../../models/homeNews';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-news',
  templateUrl: './home-news.component.html',
  styleUrls: ['./home-news.component.css']
})
export class HomeNewsComponent implements OnInit {

  title: string;

  constructor(http: HttpClient) {
    http.get<HomeNews>('https://localhost:5007/news/title').subscribe(result => {
      this.title = result.title;
    }, error => console.error(error));
   }

   ngOnInit(){
   }
}
