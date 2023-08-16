

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SkillHandlerModule } from '@directives';
import { SkillService } from '@services';

import { SkillPopoverComponent } from './skill-popover/skill-popover.component';
import { SkillTreeRoutingModule } from './skill-tree-routing.module';
import { SkillTreeComponent } from './skill-tree.component';
import { SvgSkillTreeComponent } from './svg-skill-tree/svg-skill-tree.component';


@NgModule({
  declarations: [
    SkillTreeComponent,
    SvgSkillTreeComponent,
    SkillPopoverComponent,
  ],
  imports: [
    CommonModule,
    SkillTreeRoutingModule,

    SkillHandlerModule,
  ],
  providers: [
    SkillService,
  ]
})
export class SkillTreeModule { }
