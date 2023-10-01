import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ResultComponent } from './pages/result/result.component';
import {AppRoutingModule} from "./app-routing.module";
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { InformationComponent } from './pages/information/information.component';
import { PlayComponent } from './pages/play/play.component';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    ResultComponent,
    PageNotFoundComponent,
    InformationComponent,
    PlayComponent
  ],
  imports: [
    BrowserModule, AppRoutingModule, HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
