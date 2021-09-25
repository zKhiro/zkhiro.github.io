import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TimezoneApiResponse } from '@models';

@Injectable()
export class TimezoneApiService {

  constructor(private readonly httpClient: HttpClient) { }

  /** Make a `GET` HTTP call to WorldTimeAPI to receive São Paulo current timezone. */
  getTimezone(): Observable<TimezoneApiResponse> {
    return this.httpClient.get<TimezoneApiResponse>('http://worldtimeapi.org/api/timezone/America/Sao_Paulo');
  }
}
