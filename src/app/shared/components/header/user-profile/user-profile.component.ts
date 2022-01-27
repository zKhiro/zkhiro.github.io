import * as moment from 'moment';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';

import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { HeaderService } from '@service/header.service';
import { TimezoneApiService } from '@service/timezone-api.service';
import { COMMON_STRINGS, CommonStrings } from '@utils';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss'],
  providers: [ TimezoneApiService ],
})
export class UserProfileComponent implements OnInit, OnDestroy {

  /** Level actually means my age. */
  currentLevel = 0;

  /** Experience correspond one day of a year. */
  remainingExperienceToNextLevel = 0;

  /** Represent percentage of my next birthdate. */
  experienceProgress: number;

  totalDaysCurrentYear = 0;

  onHiddenSubscribe: Subscription;

  resetAnimation = true;


  constructor(
    @Inject(COMMON_STRINGS) readonly commonStrings: typeof CommonStrings,
    private readonly timezoneApiService: TimezoneApiService,
    public readonly headerService: HeaderService,
  ) {}

  ngOnInit(): void {
    this.getCurrentDate();

    this.onHiddenSubscribe = this.headerService.onHidden.subscribe(isHidden => {
      setTimeout(() => this.resetAnimation = isHidden);
    })
  }

  ngOnDestroy(): void {
    this.onHiddenSubscribe.unsubscribe();
  }

  private getCurrentDate(): void {
    this.timezoneApiService.getTimezone().pipe(
      tap(response => {
        this.currentLevel = this.calculateMyAge(response.datetime);

        this.totalDaysCurrentYear = moment(response.datetime).set({ date: 31, month: 11 }).dayOfYear();

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
