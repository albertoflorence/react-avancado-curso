/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryUpComing
// ====================================================

export interface QueryUpComing_upComingGames_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpComing_upComingGames_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryUpComing_upComingGames {
  __typename: "Game";
  id: string;
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryUpComing_upComingGames_cover | null;
  price: number;
  discount: number | null;
  developers: QueryUpComing_upComingGames_developers[];
}

export interface QueryUpComing_section_upComing_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpComing_section_upComing_highlight_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryUpComing_section_upComing_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryUpComing_section_upComing_highlight_background | null;
  image: QueryUpComing_section_upComing_highlight_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}

export interface QueryUpComing_section_upComing {
  __typename: "ComponentPageSection";
  title: string;
  highlight: QueryUpComing_section_upComing_highlight | null;
}

export interface QueryUpComing_section {
  __typename: "Home";
  upComing: QueryUpComing_section_upComing | null;
}

export interface QueryUpComing {
  upComingGames: QueryUpComing_upComingGames[];
  section: QueryUpComing_section | null;
}

export interface QueryUpComingVariables {
  date: any;
}
