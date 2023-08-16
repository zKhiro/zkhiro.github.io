import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ComponentsModule } from '@components';
import { DirectivesModule } from '@directives';


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    DirectivesModule,
  ],
  exports: [
    ComponentsModule,
    DirectivesModule,
  ]
})
export class SharedModule { }
