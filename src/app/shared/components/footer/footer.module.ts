import { FeatherModule } from 'angular-feather';
import { Codepen, Github, Linkedin } from 'angular-feather/icons';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FooterComponent } from './footer.component';


@NgModule({
  declarations: [
    FooterComponent,
  ],
  imports: [
    CommonModule,

    FeatherModule.pick({ Codepen, Github, Linkedin }),
  ],
  exports: [
    FooterComponent,
  ]
})
export class FooterModule { }
