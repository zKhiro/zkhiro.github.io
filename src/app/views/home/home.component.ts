import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: { 'class': 'home-container container flex-column' }
})
export class HomeComponent {
  readonly Skills = [
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

  readonly Projects = [
    {
      name: "Github Search",
      link: "https://leandro-github-search.vercel.app"
    }
  ]

  currentYear = new Date().getFullYear();
}
