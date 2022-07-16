import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterModule } from './footer/footer.module';


@NgModule({
  imports: [
    CommonModule,
    FooterModule,
  ],
  exports: [
    FooterModule,
  ]
})
export class ComponentsModule { }
