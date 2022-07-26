import { Component } from '@angular/core';
import { SkillService } from '@services';


@Component({
  selector: 'app-skill-tree',
  templateUrl: './skill-tree.component.html',
  host: { class: 'container-fluid d-flex justify-content-center' },
})
export class SkillTreeComponent {

  constructor(public readonly skillService: SkillService) {}
}
