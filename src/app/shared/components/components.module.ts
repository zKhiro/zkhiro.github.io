import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';
import { NavbarModule } from './navbar/navbar.module';


@NgModule({
  imports: [
    CommonModule,
    FooterModule,
  ],
  exports: [
    FooterModule,
    NavbarModule,
  ]
})
export class ComponentsModule { }
