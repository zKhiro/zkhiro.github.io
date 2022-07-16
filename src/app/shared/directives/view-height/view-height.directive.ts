import { AfterViewInit, Directive, ElementRef, HostListener } from '@angular/core';


@Directive({
  selector: '[appViewHeight]'
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
    this.element.nativeElement.style.height = `${window.innerHeight}px`;
  }

}
