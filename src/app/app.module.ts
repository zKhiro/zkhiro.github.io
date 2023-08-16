import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FooterModule } from '@components';
import { ViewHeightModule } from '@directives';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarModule } from './shared/components/navbar/navbar.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    RouterModule,

    FooterModule,
    NavbarModule,

    ViewHeightModule,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
