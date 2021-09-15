import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { components } from './components';
import { directives } from './directives';

@NgModule({
  declarations: [
    ...components,
    ...directives,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components,
    ...directives,
  ]
})
export class SharedModule { }
