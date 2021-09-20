import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { components } from './components';
import { directives } from './directives';

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    ...components,
    ...directives,
  ]
})
export class SharedModule { }
