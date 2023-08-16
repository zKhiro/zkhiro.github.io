import { Injectable } from '@angular/core';


@Injectable()
export class SkillService {

  active    = false;
  hasFocus  = false;

  title: string;

  popoverPosition: DOMRect;
  popoverClass: string;

  reset() {
    this.active   = false;
    this.hasFocus = false;

    this.title = '';

    this.popoverClass = ''
  }
}
