import { AfterViewInit, Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appViewHeight]'
})
export class ViewHeightDirective implements AfterViewInit {

  constructor(private element: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.element.nativeElement.style.height = `${window.innerHeight}px`;
  }

}
