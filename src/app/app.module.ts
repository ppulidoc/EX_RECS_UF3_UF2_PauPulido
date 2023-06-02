import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http";
import { AppComponent } from './app.component';
import { ExercisisComponent } from './exercisis/exercisis.component';
import { QatarComponent } from './qatar/qatar.component';

@NgModule({
  declarations: [
    AppComponent,
    ExercisisComponent,
    QatarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
