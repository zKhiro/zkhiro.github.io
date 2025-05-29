import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-card-link',
  imports: [],
  templateUrl: './card-link.component.html',
  styleUrl: './card-link.component.scss',
})
export class CardLinkComponent {
  @Input() link: string
  @Input() header: string
  @Input() description: string
}
