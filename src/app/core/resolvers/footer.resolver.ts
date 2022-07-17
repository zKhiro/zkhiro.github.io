import { Observable, of } from 'rxjs';

import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot } from '@angular/router';
import { ActivatedRouteSnapshotModel } from '@models/route.model';
import { FooterService } from '@services';


@Injectable({
  providedIn: 'root'
})
export class FooterResolver implements Resolve<boolean> {

  constructor(private footerService: FooterService) {}

  resolve(route: ActivatedRouteSnapshotModel, state: RouterStateSnapshot): Observable<boolean> {
    this.footerService.containerClass = route.data.footer.containerClass;

    return of(true);
  }
}
