import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimateNumberModule } from './animate-number/animate-number.module';


@NgModule({
  imports: [
    CommonModule,
    AnimateNumberModule,
  ],
  exports: [
    AnimateNumberModule
  ],
})
export class DirectivesModule { }
