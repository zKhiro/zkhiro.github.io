export type LocaleLangType = "en" | "pt";

export type ViewLocaleKey = keyof LocaleContentModel;
export type HomeViewLinksKey = keyof Pick<HomeViewLocale, "CODEPEN" | "GITHUB" | "LINKEDIN">
export type ViewLocaleType = HomeViewLocale | ResumeViewLocale;


export interface LocaleContentHeaderModel { HEADER: string; }
export interface LocaleContentPModel { P: Array<string>; }

export type LocaleContentType = LocaleContentHeaderModel & LocaleContentPModel;

export interface LocaleContentModel {
  home: HomeViewLocale,
  resume: ResumeViewLocale,
}

export interface HomeViewLocale {
  PRESENTATION: PresentationLocale;
  ABOUT_ME: AboutMeLocale;
  SKILL: LocaleContentHeaderModel;
  LINKEDIN: string;
  GITHUB: string;
  CODEPEN: string;
  PROJECTS: ProjectsLocale;
}

export interface AboutMeLocale extends LocaleContentType {
  PRONOUN: string,
}

export interface PresentationLocale extends LocaleContentHeaderModel {
  CONTACT_ME_BUTTON: string;
  CONTACT_ME_TOAST: string;
}

export interface ProjectsLocale {
  GITHUB_SEARCH_DESCRIPTION: string;
}

export interface ResumeViewLocale {

}
