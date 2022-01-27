import { InjectionToken } from '@angular/core';

export const COMMON_STRINGS = new InjectionToken<typeof CommonStrings>('common.strings');
export const CommonStrings  = {
  name:       'Leandro Matias Baldo',
  position:   'dev front-end;',
  birthdate:  '1997-02-18T00:00',
}
