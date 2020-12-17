import { HomeRoutingModule } from './home-routing.module';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeNavigationComponent } from './home-navigation/home-navigation.component';
import { HomeAboutComponent } from './home-about/home-about.component';
import { HomeTextComponent } from './home-text/home-text.component';
import { HomeNewsComponent } from './home-news/home-news.component';

@NgModule({
  declarations: [HomeNavigationComponent, HomeAboutComponent, HomeTextComponent, HomeNewsComponent],
  imports: [
    CommonModule,
    RouterModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
