export type LocaleLangType = "en" | "pt";

export type ViewLocaleKey = keyof LocaleContentModel;
export type HomeViewLinksKey = keyof Pick<HomeViewLocale, "CODEPEN" | "GITHUB" | "LINKEDIN">


export interface LocaleContentHeaderModel { HEADER: string; }
export interface LocaleContentPModel { P: Array<string>; }

export type LocaleContentType = LocaleContentHeaderModel & LocaleContentPModel;
export type LocaleResolverType = HomeViewLocale;

export interface LocaleContentModel {
  HOME: HomeViewLocale
}

export interface HomeViewLocale {
  PRESENTATION: PresentationLocale;
  ABOUT_ME: LocaleContentType
  SKILL: LocaleContentHeaderModel;
  LINKEDIN: string;
  GITHUB: string;
  CODEPEN: string;
  PROJECTS: ProjectsLocale;
}

export interface PresentationLocale extends LocaleContentHeaderModel {
  CONTACT_ME_BUTTON: string;
  CONTACT_ME_TOAST: string;
}

export interface ProjectsLocale {
  GITHUB_SEARCH_DESCRIPTION: string;
}
