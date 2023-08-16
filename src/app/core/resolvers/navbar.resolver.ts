import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshotModel } from '@models/route.model';
import { NavbarService } from '@services';


@Injectable({
  providedIn: 'root'
})
export class NavbarResolver implements Resolve<boolean> {

  constructor(private navbarService: NavbarService) {}

  resolve(route: ActivatedRouteSnapshotModel, state: RouterStateSnapshot): Observable<boolean> {
    this.navbarService.show   = route.data.navbar.showNavbar;
    this.navbarService.title  = route.data.navbar.title || '';

    return of(true);
  }
}
