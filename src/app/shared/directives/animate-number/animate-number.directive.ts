import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AnimationFrame } from '@classes';


@Directive({
  selector: '[animateNumber]',
})
export class AnimateNumberDirective implements OnChanges {

  /** Number that need to be animated. */
  @Input() initialValue = 0;

  /**
   * Define end value.
   *
   * @default 0
   */
  @Input() endValue = 0;

  /**
   * Duration of the transition between `initialValue` and `endValue` value.
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


  constructor(
    private element: ElementRef<HTMLElement>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    this.element.nativeElement.innerText = changes.initialValue.currentValue;

    const numberAnimation = new AnimationFrame(elapsed => {
      const elapsedAnimateNumber = Math.floor((this.endValue - changes.initialValue.currentValue) * elapsed);

      this.element.nativeElement.innerText = (changes.initialValue.currentValue + elapsedAnimateNumber).toString();
    }, this.duration, this.delay);

    numberAnimation.start();
  }
}
