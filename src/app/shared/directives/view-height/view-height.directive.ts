import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
    selector: '[appViewHeight]',
    standalone: false
})
export class ViewHeightDirective implements AfterViewInit {

  constructor(private element: ElementRef<HTMLElement>) { }

  ngAfterViewInit(): void {
    this.applyViewHeight();
  }

  @HostListener("window:resize")
  onWindowsResize() {
    this.applyViewHeight();
  }

  private applyViewHeight() {
    this.element.nativeElement.style.minHeight = `${window.innerHeight}px`;
  }

}
