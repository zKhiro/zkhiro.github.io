import { Observable, Subscription } from 'rxjs';

import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LinksModel, ProjectsModel } from '@models/content.model';
import { HomeViewLocale } from '@models/locale.model';
import { ContentService, LocaleService } from '@services';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss'],
    host: { 'class': 'container container flex-column' },
    standalone: false
})
export class HomeComponent implements OnInit, OnDestroy {
  readonly Skills$: Observable<Array<String>> = this.contentService.getSkill();
  readonly Links$: Observable<Array<LinksModel>> = this.contentService.getLinks();
  readonly Projects$: Observable<Array<ProjectsModel>> = this.contentService.getProjects();

  currentYear = new Date().getFullYear();

  homeViewLocale: HomeViewLocale

  localeChangedSubs: Subscription


  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly localeService: LocaleService,
    readonly contentService: ContentService,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data => {
      this.homeViewLocale = data.locale;

      this.localeChangedSubs = this.localeService.LocaleChanged.subscribe(() => {
        this.localeService.getViewTranslation().subscribe(locale => this.homeViewLocale = locale);
      });
    });
  }

  ngOnDestroy(): void {
    if (this.localeChangedSubs) {
      this.localeChangedSubs.unsubscribe()
    }
  }
}
