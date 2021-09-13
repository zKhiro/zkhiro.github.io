import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { components } from './components';

@NgModule({
  declarations: [
    ...components,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
  ]
})
export class SharedModule { }
