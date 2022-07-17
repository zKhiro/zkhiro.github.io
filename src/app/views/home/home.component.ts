import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { 'class': 'home-container container flex-column flex-lg-row gap-4 gap-lg-6' }
})
export class HomeComponent {}
