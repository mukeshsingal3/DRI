import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations"
import { NoopAnimationsModule } from "@angular/platform-browser/animations"
import { MatIconModule } from '@angular/material/icon';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { scheduleMicroTask } from '@angular/core/src/util';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent
 
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
