/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryRecommended
// ====================================================

export interface QueryRecommended_recommended_section_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_highlight_image {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: QueryRecommended_recommended_section_highlight_background | null;
  image: QueryRecommended_recommended_section_highlight_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}

export interface QueryRecommended_recommended_section_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryRecommended_recommended_section_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryRecommended_recommended_section_games {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryRecommended_recommended_section_games_cover | null;
  price: number;
  developers: QueryRecommended_recommended_section_games_developers[];
}

export interface QueryRecommended_recommended_section {
  __typename: "ComponentPagePopularGames";
  title: string;
  highlight: QueryRecommended_recommended_section_highlight | null;
  games: QueryRecommended_recommended_section_games[];
}

export interface QueryRecommended_recommended {
  __typename: "Recommended";
  section: QueryRecommended_recommended_section | null;
}

export interface QueryRecommended {
  recommended: QueryRecommended_recommended | null;
}
