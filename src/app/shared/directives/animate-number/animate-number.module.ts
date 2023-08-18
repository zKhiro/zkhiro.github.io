import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { AnimateNumberDirective } from './animate-number.directive';


@NgModule({
  declarations: [
    AnimateNumberDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    AnimateNumberDirective,
  ],
})
export class AnimateNumberModule { }
