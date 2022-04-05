/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryGames
// ====================================================

export interface QueryGames_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryGames_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryGames_games {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryGames_games_cover | null;
  price: number;
  developers: QueryGames_games_developers[];
}

export interface QueryGames {
  games: QueryGames_games[];
}

export interface QueryGamesVariables {
  limit: number;
  start?: number | null;
  where?: any | null;
  sort?: string | null;
}
