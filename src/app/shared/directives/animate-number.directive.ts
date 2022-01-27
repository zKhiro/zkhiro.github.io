import { AnimationFrame } from 'src/app/core/classes';

import {
    Directive, ElementRef, Inject, Input, OnChanges, Renderer2, SimpleChanges
} from '@angular/core';
import { NUMBER_WIDE, NumberWide } from '@utils';

@Directive({
  selector: '[animateNumber]',
  providers: [ { provide: NUMBER_WIDE, useValue: NumberWide } ]
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
   * Specific alignment of the text.
   *
   * @default 'left'
   */
  @Input() textAlign: 'left' | 'center' | 'right' = 'left';

  /**
   * Define if value will be increase or decrease.
   *
   * @default false // Will Increase
   */
  @Input() decrease = false;

  /**
   * Define initial value to animate.
   *
   * @default 0
   */
  @Input() initialValue = 0;


  constructor(
    @Inject(NUMBER_WIDE) private readonly numberWide: typeof NumberWide,
    private readonly renderer: Renderer2,
    private element: ElementRef<HTMLElement>,
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    const total = this.decrease ? 365 - changes.animateNumber.currentValue : 0;

    let minWidth = 0;

    (changes.animateNumber.currentValue as number).toString().split('').forEach(absoluteNumber => {
      minWidth += this.normalizeWidth(+absoluteNumber);
    });

    this.renderer.setStyle(
      this.element.nativeElement,
      'min-width',
      `${Math.floor(minWidth + this.getPaddingX())}px`,
    );

    this.renderer.setStyle(this.element.nativeElement, 'text-align', this.textAlign);

    const numberAnimation = new AnimationFrame(elapsed => {
      const elapsedAnimateNumber  = elapsed * changes.animateNumber.currentValue;
      let   numberInThisFrame     = this.initialValue + elapsedAnimateNumber * (this.decrease ? - 1 : 1);

      this.element.nativeElement.innerText = Math.floor(numberInThisFrame).toString();
    }, 400, this.delay);

    numberAnimation.start();
  }

  private teste = (changes: SimpleChanges) => this.decrease ? changes.animateNumber.previousValue : 0;

  /** Calculate `padding-right` plus `padding-left`. */
  private getPaddingX = () => {
    return parseInt(window.getComputedStyle(this.element.nativeElement).paddingLeft, 10) +
           parseInt(window.getComputedStyle(this.element.nativeElement).paddingRight, 10);
  };

  /**
   * Make each number have the same width. To do this it's calculate `font-size` of the element
   * times the **number wide**. This number was pick because it's the wide number of the font family **Poppins**.
   *
   * @param number - The digit number that needs to normalize.
   */
  private normalizeWidth = (number: number) => {
    return (parseInt(window.getComputedStyle(this.element.nativeElement).fontSize, 10)) * this.numberWide[number];
  };
}
