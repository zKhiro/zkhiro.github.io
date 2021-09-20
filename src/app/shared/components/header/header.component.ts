import { Component, Inject } from '@angular/core';
import { COMMON_STRINGS, CommonStrings } from '@utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(@Inject(COMMON_STRINGS) readonly commonStrings: typeof CommonStrings) {}
}
