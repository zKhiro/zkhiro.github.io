import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { LocaleLangType, ViewLocaleKey } from '@models/locale.model';
import { DEFAULT_LANG, LOCAL_STORAGE_KEYS } from '@utils';


@Injectable({
  providedIn: 'root'
})
export class LocaleService {

  private locale_key: ViewLocaleKey;

  private readonly _LOCALE_ENDPOINT: string = '/locale';
  get LOCALE_ENDPOINT(): string { return `${this._LOCALE_ENDPOINT}/$/${this.current_lang}.json` }

  private _current_lang: LocaleLangType;
  get current_lang(): LocaleLangType {
    let lang = window.localStorage.getItem(LOCAL_STORAGE_KEYS.LANG);

    if (!lang) {
      this.changeLocale(DEFAULT_LANG);
      lang = DEFAULT_LANG;
    }

    return lang as LocaleLangType;
  }

  readonly LocaleChanged: EventEmitter<LocaleLangType> = new EventEmitter();


  constructor(private readonly httpClient: HttpClient) { }


  changeLocale(new_lang: LocaleLangType): void {
    window.localStorage.setItem(LOCAL_STORAGE_KEYS.LANG, new_lang);

    this.LocaleChanged.emit(new_lang);
  }

  getViewTranslation<R>(view: ViewLocaleKey): Observable<R> {
    this.locale_key = view;

    return this.httpClient.get<R>(this.LOCALE_ENDPOINT.replace("$", this.locale_key));
  }
}
