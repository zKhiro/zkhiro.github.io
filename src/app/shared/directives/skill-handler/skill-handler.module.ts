import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillHandlerDirective } from './skill-handler.directive';



@NgModule({
  declarations: [
    SkillHandlerDirective
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    SkillHandlerDirective,
  ]
})
export class SkillHandlerModule { }
