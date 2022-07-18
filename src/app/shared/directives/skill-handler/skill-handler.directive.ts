import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appSkillHandler]'
})
export class SkillHandlerDirective {

  constructor(private element: ElementRef<HTMLElement>) { }
}
