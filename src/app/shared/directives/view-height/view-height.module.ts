import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ViewHeightDirective } from './view-height.directive';


@NgModule({
  declarations: [
    ViewHeightDirective,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ViewHeightDirective,
  ]
})
export class ViewHeightModule { }
