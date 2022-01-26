import { Subscription } from 'rxjs';

import { Component } from '@angular/core';
import { HeaderService } from '@service/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {

  routeSubscribe: Subscription;


  constructor(public readonly headerService: HeaderService) {}
}
