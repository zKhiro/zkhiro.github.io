import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SkillTreeRoutingModule } from './skill-tree-routing.module';
import { SkillTreeComponent } from './skill-tree.component';
import { SharedModule } from '@shared/shared.module';


@NgModule({
  declarations: [SkillTreeComponent],
  imports: [
    CommonModule,

    SkillTreeRoutingModule,

    SharedModule,
  ]
})
export class SkillTreeModule { }
