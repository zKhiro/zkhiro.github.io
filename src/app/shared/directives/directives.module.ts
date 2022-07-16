import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ViewHeightModule } from './view-height/view-height.module';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ViewHeightModule,
  ]
})
export class DirectivesModule { }
