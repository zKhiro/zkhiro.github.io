import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnimationFrame } from '@classes';


@Directive({
  selector: '[animateNumber]',
})
export class AnimateNumberDirective implements OnChanges {

  /** Number that need to be animated. */
  @Input() animateNumber = 0;

  /**
   * Duration of the transition between `0` and `animateNumber` value.
   *
   * @default 400
   */
  @Input() duration = 400;

  /**
   * Amount of delay apply before animation start.
   *
   * @default 0
   */
  @Input() delay = 0;

  /**
   * Define if value will be increase or decrease.
   *
   * @default false // Will Increase
   */
  @Input() decrease = false;

  /**
   * Define end value.
   *
   * @default 0
   */
  @Input() endValue = 0;


  constructor(
    private element: ElementRef<HTMLElement>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const numberAnimation = new AnimationFrame(elapsed => {
      const elapsedAnimateNumber = Math.floor((this.endValue - this.animateNumber) * elapsed);

      this.element.nativeElement.innerText = (this.animateNumber + elapsedAnimateNumber).toString();
    }, this.duration, this.delay);

    numberAnimation.start();
  }
}
