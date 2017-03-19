import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MainComponent } from './UI/main.component';
import { AppRoutingModule } from './app-routing.module';



@NgModule({
  imports: [
    HttpModule,
    AppRoutingModule,
    BrowserModule
  ],
  declarations: [ AppComponent, MainComponent ],
  entryComponents: [],
  providers: [],
  bootstrap: [ AppComponent ],
})
export class AppModule { }
