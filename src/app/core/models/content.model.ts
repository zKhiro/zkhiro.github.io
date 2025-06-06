import { HomeViewLinksKey, ProjectsLocale } from './locale.model';


export interface LinksModel {
  header: string;
  localeKey: HomeViewLinksKey;
  url: string;
}

export interface ProjectsModel {
  name: string;
  descriptionKey: keyof ProjectsLocale;
  url: string;
  tags: Array<string>;
  thumbnail: string;
  cssTheme?: string;
}
