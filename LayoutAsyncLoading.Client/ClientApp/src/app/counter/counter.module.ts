import { CounterRoutingModule } from './counter-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterNumbersComponent } from './counter-numbers/counter-numbers.component';

@NgModule({
  declarations: [CounterNumbersComponent],
  imports: [
    CommonModule,
    CounterRoutingModule
  ],
  exports: [CounterNumbersComponent]
})
export class CounterModule { }
