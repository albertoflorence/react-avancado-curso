/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryHome
// ====================================================

export interface QueryHome_banners_image {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryHome_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
}

export interface QueryHome_banners_button {
  __typename: "ComponentPageLink";
  href: string;
  label: string;
}

export interface QueryHome_banners {
  __typename: "Banner";
  title: string;
  subtitle: string;
  image: QueryHome_banners_image | null;
  ribbon: QueryHome_banners_ribbon | null;
  button: QueryHome_banners_button | null;
}

export interface QueryHome_newGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_newGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_newGames {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryHome_newGames_cover | null;
  price: number;
  developers: QueryHome_newGames_developers[];
}

export interface QueryHome_upComingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_upComingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_upComingGames {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryHome_upComingGames_cover | null;
  price: number;
  developers: QueryHome_upComingGames_developers[];
}

export interface QueryHome_freeGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_freeGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_freeGames {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryHome_freeGames_cover | null;
  price: number;
  developers: QueryHome_freeGames_developers[];
}

export interface QueryHome_sections_upComing_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upComing_highlight_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_upComing_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_upComing_highlight_background | null;
  image: QueryHome_sections_upComing_highlight_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}

export interface QueryHome_sections_upComing {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_upComing_highlight | null;
}

export interface QueryHome_sections_newGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGames_highlight_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_newGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_newGames_highlight_background | null;
  image: QueryHome_sections_newGames_highlight_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}

export interface QueryHome_sections_newGames {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_newGames_highlight | null;
}

export interface QueryHome_sections_mostPopular_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_mostPopular_highlight_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_mostPopular_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_mostPopular_highlight_background | null;
  image: QueryHome_sections_mostPopular_highlight_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}

export interface QueryHome_sections_mostPopular_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_mostPopular_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryHome_sections_mostPopular_games {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryHome_sections_mostPopular_games_cover | null;
  price: number;
  developers: QueryHome_sections_mostPopular_games_developers[];
}

export interface QueryHome_sections_mostPopular {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryHome_sections_mostPopular_highlight | null;
  games: QueryHome_sections_mostPopular_games[];
}

export interface QueryHome_sections_freeGames_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGames_highlight_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryHome_sections_freeGames_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryHome_sections_freeGames_highlight_background | null;
  image: QueryHome_sections_freeGames_highlight_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}

export interface QueryHome_sections_freeGames {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryHome_sections_freeGames_highlight | null;
}

export interface QueryHome_sections {
  __typename: "Home";
  upComing: QueryHome_sections_upComing | null;
  newGames: QueryHome_sections_newGames | null;
  mostPopular: QueryHome_sections_mostPopular | null;
  freeGames: QueryHome_sections_freeGames | null;
}

export interface QueryHome {
  banners: QueryHome_banners[];
  newGames: QueryHome_newGames[];
  upComingGames: QueryHome_upComingGames[];
  freeGames: QueryHome_freeGames[];
  sections: QueryHome_sections | null;
}

export interface QueryHomeVariables {
  date: any;
}
