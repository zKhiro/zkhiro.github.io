import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { 'class': 'home-container container flex-column' }
})
export class HomeComponent {
  readonly skills = [
    'HTML',
    'CSS',
    'SASS',
    'JavaScript',
    'TypeScript',
    'Angular',
    'RxJs',
    'Figma',
    'Godot',
    'LESS',
    'Firebase',
    'Vue',
    'React',
    'Photoshop',
    'Blender',
    'Git',
    'GraphQL',
  ];

  currentYear = new Date().getFullYear();
}
