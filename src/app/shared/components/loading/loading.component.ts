import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit, OnDestroy {

  readonly overflowHiddenClassName = 'overflow-hidden';

  ngOnInit(): void {
    this.getBodyElement()?.classList.add(this.overflowHiddenClassName);
  }

  ngOnDestroy(): void {
    this.getBodyElement()?.classList.remove(this.overflowHiddenClassName);
  }

  getBodyElement = (): HTMLBodyElement | null => document.querySelector('body');
}
