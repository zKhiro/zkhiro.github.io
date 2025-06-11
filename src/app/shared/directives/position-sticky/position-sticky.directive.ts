import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';


@Directive({
  selector: '[appPositionSticky]'
})
export class PositionStickyDirective implements OnInit {

  lastOffsetTop: number | null = null;
  styleApplied: boolean = false;


  constructor(
    private readonly element: ElementRef<HTMLElement>,
    private readonly renderer: Renderer2,
  ) { }

  ngOnInit() {
    this.applyStylesIfScrollInPosition();
  }

  @HostListener("window:scroll")
  scrolling() {
    if (!this.styleApplied) {
      this.applyStylesIfScrollInPosition();
    } else {
      this.removeStyles();
    }
  }

  @HostListener("window:resize")
  windowResize() {
    if (this.styleApplied) {
      this.resize();
    }
  }


  private applyStylesIfScrollInPosition() {
    if (window.scrollY >= this.element.nativeElement.offsetTop) {
      this.lastOffsetTop = this.element.nativeElement.offsetTop;

      this.resize();
      this.renderer.setStyle(this.element.nativeElement, 'top', '46px');
      this.renderer.addClass(this.element.nativeElement, 'position-lg-fixed');

      this.styleApplied = true;
    }
  }

  private removeStyles() {
    if (!!this.lastOffsetTop && (window.scrollY <= this.lastOffsetTop)) {
      this.renderer.removeClass(this.element.nativeElement, 'position-lg-fixed');
      this.renderer.removeStyle(this.element.nativeElement, 'width');
      this.renderer.removeStyle(this.element.nativeElement, 'top');

      this.styleApplied = false;
    }
  }

  private resize() {
    this.renderer.setStyle(this.element.nativeElement, 'width', `${this.element.nativeElement.parentElement?.offsetWidth}px`);
  }

}
