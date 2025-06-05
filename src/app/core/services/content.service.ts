import { Observable } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LinksModel, ProjectsModel } from '@models/content.model';


@Injectable({
  providedIn: 'root',
})
export class ContentService {

  readonly DATA_ENDPOINT: string = '/assets/data';


  constructor(private readonly httpClient: HttpClient) { }

  getSkill(): Observable<Array<String>> {
    return this.httpClient.get<Array<String>>(`${this.DATA_ENDPOINT}/skill.json`);
  }

  getLinks(): Observable<Array<LinksModel>> {
    return this.httpClient.get<Array<LinksModel>>(`${this.DATA_ENDPOINT}/links.json`);
  }

  getProjects(): Observable<Array<ProjectsModel>> {
    return this.httpClient.get<Array<ProjectsModel>>(`${this.DATA_ENDPOINT}/projects.json`)
  }
}
