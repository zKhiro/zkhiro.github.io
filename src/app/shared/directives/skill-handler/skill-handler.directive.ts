import { Directive, ElementRef, HostListener } from '@angular/core';
import { SkillService } from '@services';


@Directive({
  selector: '[skillHandler]'
})
export class SkillHandlerDirective {

  constructor(
    private element: ElementRef<HTMLElement>,
    private skillService: SkillService,
  ) { }

  @HostListener('mouseenter')
  private mouseEnterEvent(event: MouseEvent) {
    if (!this.skillService.active) {
      this.setSkill();
    }
  }

  @HostListener('mouseleave')
  private mouseLeaveEvent(event: MouseEvent) {
    this.skillService.active = this.skillService.hasFocus;
  }

  @HostListener('focus')
  private focusEvent() {
    this.skillService.hasFocus = true;

    this.setSkill();
  }

  @HostListener('blur')
  private blurEvent() {
    this.skillService.reset();
  }


  private getParentElement    = () => (this.element.nativeElement.parentElement as HTMLElement);
  private getParentElementId  = () => this.getParentElement().id;

  private setSkill() {
    this.skillService.active  = true;
    this.skillService.title   = this.getParentElementId();

    this.skillService.popoverPosition = this.getParentElement().getBoundingClientRect();
    this.skillService.popoverClass    = `skill-${this.getParentElement().dataset.type}`;
  }

}
