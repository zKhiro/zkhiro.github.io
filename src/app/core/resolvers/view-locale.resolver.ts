import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { LocaleResolverType } from '@models/locale.model';
import { LocaleService } from '@services';


export const viewLocaleResolver: ResolveFn<LocaleResolverType | null> = (route, state) => {
  if (route.data.locale_key) {
    return inject(LocaleService).getViewTranslation(route.data.locale_key)
  }

  return null;
};
