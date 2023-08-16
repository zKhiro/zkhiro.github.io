import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillHandlerModule } from './skill-handler/skill-handler.module';

import { ViewHeightModule } from './view-height/view-height.module';


@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    SkillHandlerModule,
    ViewHeightModule,
  ],
})
export class DirectivesModule { }
