import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-toast',
  imports: [],
  templateUrl: './toast.component.html',
  styleUrl: './toast.component.scss'
})
export class ToastComponent {
  private _show: boolean;
  get show(): boolean { return this._show; }
  @Input() set show(new_value: boolean) {
    this._show = new_value;

    if (new_value) {
      setTimeout(() => {
        this._show = false;

        console.log('ciao', this._show);

        this.showChange.emit(this._show);
      }, 4000);
    }
  }
  @Output() showChange: EventEmitter<boolean> = new EventEmitter<boolean>();

}
