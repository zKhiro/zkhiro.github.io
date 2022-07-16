import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { 'class': 'd-flex flex-column flex-lg-row align-self-center align-items-center gap-4 gap-lg-6 w-100' }
})
export class HomeComponent {}
