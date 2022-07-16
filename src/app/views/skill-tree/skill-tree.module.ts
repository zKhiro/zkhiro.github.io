import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SkillTreeRoutingModule } from './skill-tree-routing.module';
import { SkillTreeComponent } from './skill-tree.component';


@NgModule({
  declarations: [
    SkillTreeComponent,
  ],
  imports: [
    CommonModule,
    SkillTreeRoutingModule,
  ]
})
export class SkillTreeModule { }
