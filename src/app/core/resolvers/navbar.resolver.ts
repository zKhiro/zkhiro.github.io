import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { NavbarService } from '@services';


@Injectable({
  providedIn: 'root'
})
export class NavbarResolver implements Resolve<boolean> {

  constructor(private navbarService: NavbarService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    this.navbarService.show   = route.data.showNavbar;
    this.navbarService.title  = route.data.title;

    return of(true);
  }
}
