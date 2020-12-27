import { HomeNewsComponent } from "./home-news/home-news.component";
import { HomeTextComponent } from "./home-text/home-text.component";
import { HomeNavigationComponent } from "./home-navigation/home-navigation.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeAboutComponent } from "./home-about/home-about.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "navigation",
  },
  {
    path: "navigation",
    component: HomeNavigationComponent,
    children: [
      { path: "news", component: HomeNewsComponent, outlet: "sub" },
      { path: "text", component: HomeTextComponent, outlet: "sub" },
      { path: "about", component: HomeAboutComponent, outlet: "sub" },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}
