import { HttpClientModule } from '@angular/common/http';
import { CarsRoutingModule } from './cars-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsListComponent } from './cars-list/cars-list.component';

@NgModule({
  declarations: [CarsListComponent],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule
  ]
})
export class CarsModule { }
