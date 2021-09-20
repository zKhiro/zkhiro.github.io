import { Component } from '@angular/core';
import { COMMON_STRINGS, CommonStrings } from '@utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ { provide: COMMON_STRINGS, useValue: CommonStrings, } ]
})
export class AppComponent {
  isLoading = false;
}
