import { Component, Input } from '@angular/core';
import { ProjectsModel } from '@models/content.model';


@Component({
  selector: 'app-card-project',
  imports: [],
  templateUrl: './card-project.component.html',
  styleUrl: './card-project.component.scss',
})
export class CardProjectComponent {
  @Input() content: ProjectsModel;
}
