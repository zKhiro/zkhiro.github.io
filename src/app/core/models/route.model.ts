import { ActivatedRouteSnapshot, Route } from '@angular/router';

import { FooterRouteDataModel } from './footer.model';


export type RoutesModel = RouteModel[];

export interface RouteModel extends Route {
  data?: RouteDataModel,
}

export interface ActivatedRouteSnapshotModel extends ActivatedRouteSnapshot {
  data: RouteDataModel,
}

export interface RouteDataModel {
  footer: FooterRouteDataModel,
}