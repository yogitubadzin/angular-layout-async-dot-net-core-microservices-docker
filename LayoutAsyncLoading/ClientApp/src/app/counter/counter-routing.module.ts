import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CounterNumbersComponent } from './counter-numbers/counter-numbers.component';

const routes: Routes = [{ path: '', component: CounterNumbersComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CounterRoutingModule {}
