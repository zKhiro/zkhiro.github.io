import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { FeatherIconsType } from '@models';
import { Assets } from '@utils';

@Directive({
  selector: '[featherIcon]'
})
export class FeatherIconDirective implements OnInit {

  @Input() featherIcon: FeatherIconsType;

  @Input() fiClasses: string[] = [];

  private readonly featherIconDir = `${Assets.imagesDir}feather-sprite.svg#`;


  constructor(private el: ElementRef<SVGElement>) { }

  ngOnInit(): void {
    this.el.nativeElement.classList.add('feather-icon', ...this.fiClasses);

    this.el.nativeElement.innerHTML = `<use xlink:href="${this.featherIconDir + this.featherIcon}"/>`
  }
}
