import { Component, Inject } from '@angular/core';
import { APP_CONFIG } from '@configs';
import { AppConfigModel } from '@models';
import { COMMON_STRINGS, CommonStrings } from '@utils';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [{ provide: COMMON_STRINGS, useValue: CommonStrings }]
})
export class AppComponent {
  isLoading = false;

  constructor(@Inject(APP_CONFIG) public readonly appConfig: AppConfigModel) {}
}
