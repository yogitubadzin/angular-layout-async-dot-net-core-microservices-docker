import { Car } from './../../models/car';
import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cars-list',
  templateUrl: './cars-list.component.html',
  styleUrls: ['./cars-list.component.css']
})
export class CarsListComponent implements OnInit {
  public cars: Car[];

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<Car[]>(baseUrl + 'cars').subscribe(result => {
      this.cars = result;
    }, error => console.error(error));
  }

  ngOnInit(){
  }
}
