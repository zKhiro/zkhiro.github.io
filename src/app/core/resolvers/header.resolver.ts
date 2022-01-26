

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HeaderService } from '@service/header.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderResolver implements Resolve<void> {

  constructor(private headerService: HeaderService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void {
    this.headerService.title  = route.data.title;
    this.headerService.hidden = !route.data.showHeader;
  }
}
