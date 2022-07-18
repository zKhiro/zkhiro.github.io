import { Component } from '@angular/core';
import { NavbarService } from '@services';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(public readonly navbarService: NavbarService) { }

}