import { Component, Inject } from '@angular/core';
import { COMMON_STRINGS, CommonStrings } from '@utils';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {

  constructor(@Inject(COMMON_STRINGS) readonly commonStrings: typeof CommonStrings) {}
}