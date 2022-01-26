import { EventEmitter, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'platform'
})
export class HeaderService {
  /** Define a title for the current page. */
  title: string;

  private _hidden = true;
  /** Define if header should appear or not. */
  set hidden(hidden: boolean) {
    this._hidden = hidden;
    this.onHidden.emit(hidden);
  };
  get hidden() { return this._hidden; }

  /** This event is emitted when `hidden` value changes. */
  readonly onHidden = new EventEmitter<boolean>();
}
