import { Component } from '@angular/core';
import { SkillService } from '@services';


@Component({
  selector: 'app-skill-popover',
  templateUrl: './skill-popover.component.html',
  styleUrls: ['./skill-popover.component.scss'],
  host: { class: 'd-flex justify-content-center fixed-top' },
})
export class SkillPopoverComponent {

  constructor(public readonly skillService: SkillService) { }
}
