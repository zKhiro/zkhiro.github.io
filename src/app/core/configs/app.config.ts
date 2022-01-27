import { InjectionToken } from '@angular/core';

import { AppConfigModel } from '../models/app-config.model';

export const APP_CONFIG = new InjectionToken<AppConfigModel>('appConfig', { factory: () => AppConfig, providedIn: 'root' });

export let AppConfig: AppConfigModel = {
  verticalAlign: 'center',
}