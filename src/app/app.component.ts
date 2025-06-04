import { Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { LocaleLangType } from '@models/locale.model';
import { LocaleService } from '@services';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    standalone: false
})
export class AppComponent implements OnInit, OnDestroy {

  langControl = new FormControl<LocaleLangType>(this.localeService.current_lang);
  langControlValueChangesSub: Subscription;

  constructor(private readonly localeService: LocaleService) {}


  ngOnInit(): void {
    this.langControlValueChangesSub = this.langControl.valueChanges.subscribe(newLang => this.localeService.changeLocale(newLang as LocaleLangType))
  }

  ngOnDestroy(): void {
    this.langControlValueChangesSub.unsubscribe();
  }

  changeLocale(event: MouseEvent): void {
    const target = event.target as HTMLButtonElement;
    this.localeService.changeLocale(target.value as LocaleLangType)
  }
}
