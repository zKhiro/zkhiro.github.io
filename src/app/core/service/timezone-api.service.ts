import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TimezoneApiResponse } from '@models';

@Injectable()
export class TimezoneApiService {

  constructor(private readonly httpClient: HttpClient) { }

  getTimezone() {
    return this.httpClient.get<TimezoneApiResponse>('http://worldtimeapi.org/api/timezone/America/Sao_Paulo');
  }
}
