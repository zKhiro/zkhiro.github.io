import { Component, Inject, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';


import { COMMON_STRINGS, CommonStrings } from '@utils';
import { TimezoneApiService } from '@service/timezone-api.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers: [ TimezoneApiService ]
})
export class HeaderComponent implements OnInit {

  totalExp = 126;


  constructor(
    @Inject(COMMON_STRINGS) readonly commonStrings: typeof CommonStrings,
    private readonly timezoneApiService: TimezoneApiService,
  ) {}

  ngOnInit() {
    this.calculateAge();
  }

  private calculateAge() {
    this.timezoneApiService.getTimezone().pipe(
      tap(response => {
        const today       = new Date(response.datetime);
        const myBirthdate = new Date('1997-02-18T00:00');

        this.totalExp
      })
    ).subscribe();

  }
}
