import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillTreeRoutingModule } from './skill-tree-routing.module';
import { SkillTreeComponent } from './skill-tree.component';
import { SvgSkillTreeComponent } from './svg-skill-tree/svg-skill-tree.component';


@NgModule({
  declarations: [
    SkillTreeComponent,
    SvgSkillTreeComponent,
  ],
  imports: [
    CommonModule,
    SkillTreeRoutingModule,
  ]
})
export class SkillTreeModule { }
