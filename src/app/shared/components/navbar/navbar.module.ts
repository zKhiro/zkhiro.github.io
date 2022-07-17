import { FeatherModule } from 'angular-feather';
import { ChevronLeft } from 'angular-feather/icons';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { NavbarComponent } from './navbar.component';
import { UserComponent } from './user/user.component';


@NgModule({
  declarations: [
    NavbarComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    RouterModule,

    FeatherModule.pick({ ChevronLeft })
  ],
  exports: [
    NavbarComponent,
  ]
})
export class NavbarModule { }
