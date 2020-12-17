import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-navigation',
  templateUrl: './home-navigation.component.html',
  styleUrls: ['./home-navigation.component.css']
})
export class HomeNavigationComponent implements OnInit {

  constructor(private router: Router) {
    this.router.navigate([
      'home/navigation', {
          outlets: { sub: ['news'] }
      }]);
   }

  ngOnInit() {
  }

}
