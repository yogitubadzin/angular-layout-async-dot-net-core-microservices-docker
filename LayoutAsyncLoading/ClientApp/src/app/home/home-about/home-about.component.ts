import { HomeAbout } from './../../models/homeAbout';
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-about",
  templateUrl: "./home-about.component.html",
  styleUrls: ["./home-about.component.css"],
})
export class HomeAboutComponent implements OnInit {
  title: string;

  constructor(http: HttpClient) {
    http.get<HomeAbout>('https://localhost:44440/about/title').subscribe(result => {
      this.title = result.title;
    }, error => console.error(error));
   }

  ngOnInit() {}
}
