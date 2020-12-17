import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';

@NgModule({
  declarations: [PageNotFoundComponent, NavMenuComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [PageNotFoundComponent, NavMenuComponent],
})
export class SharedModule { }
