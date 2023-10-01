import {Component, NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {ResultComponent} from "./pages/result/result.component";
import {PageNotFoundComponent} from "./pages/page-not-found/page-not-found.component";
import {InformationComponent} from "./pages/information/information.component";
import {PlayComponent} from "./pages/play/play.component";

const routes: Routes = [
  { path: '', redirectTo: '/information', pathMatch: 'full' },
  {path: 'information', component: InformationComponent},
  {path: 'play', component: PlayComponent},
  {path: 'result', component: ResultComponent},
  { path: '**', component: PageNotFoundComponent }
]

@NgModule({
  imports:[RouterModule.forRoot(routes)],
  exports:[RouterModule],
})
export class AppRoutingModule {}
