import * as moment from 'moment';
import { tap } from 'rxjs/operators';

import { Component, Inject, OnInit } from '@angular/core';
import { TimezoneApiService } from '@service/timezone-api.service';
import { COMMON_STRINGS, CommonStrings } from '@utils';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ TimezoneApiService ]
})
export class HeaderComponent implements OnInit {

  /** Level actually means my age. */
  currentLevel: number;

  /** Experience correspond one day of a year. */
  remainingExperienceToNextLevel: number;

  /** Represent percentage of my next birthdate. */
  experienceProgress: number;


  constructor(
    @Inject(COMMON_STRINGS) readonly commonStrings: typeof CommonStrings,
    private readonly timezoneApiService: TimezoneApiService,
  ) {}

  ngOnInit() {
    this.getCurrentDate();
  }

  private getCurrentDate(): void {
    this.timezoneApiService.getTimezone().pipe(
      tap(response => {
        this.currentLevel = this.calculateMyAge(response.datetime);

        this.calculateProgressToMyNextBirthdate(response.datetime);
      }),
    ).subscribe();
  }

  /**
   * Calculate my current age and returns it.
   *
   * @param currentDate - An ISO8601-valid string representing the current local date/time.
   */
  private calculateMyAge(currentDate: string): number {
    const today       = moment(currentDate);
    const myBirthdate = moment(this.commonStrings.birthdate);

    return today.diff(myBirthdate, 'years');
  }

  /**
   * Calculate how many days remain to my next birthdate and the porcentage to it.
   *
   * This should be invoked after `calculateMyAge()` finished.
   *
   * @param currentDate - An ISO8601-valid string representing the current local date/time.
   */
  private calculateProgressToMyNextBirthdate(currentDate: string): void {
    const today             = moment(currentDate);
    const thisYearBirthdate = moment(this.commonStrings.birthdate).add(this.currentLevel, 'year');
    const nextYearBirthdate = thisYearBirthdate.clone().add(1, 'year');

    this.remainingExperienceToNextLevel = nextYearBirthdate.diff(today, 'days');
    this.experienceProgress             = (nextYearBirthdate.diff(thisYearBirthdate, 'days') - this.remainingExperienceToNextLevel) / nextYearBirthdate.diff(thisYearBirthdate, 'days') * 100;
  }
}
