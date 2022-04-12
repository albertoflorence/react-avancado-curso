/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: QueryWishlist
// ====================================================

export interface QueryWishlist_wishlists_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface QueryWishlist_wishlists_games_developers {
  __typename: "Developer";
  name: string;
}

export interface QueryWishlist_wishlists_games {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: QueryWishlist_wishlists_games_cover | null;
  price: number;
  developers: QueryWishlist_wishlists_games_developers[];
}

export interface QueryWishlist_wishlists {
  __typename: "Wishlist";
  games: QueryWishlist_wishlists_games[];
}

export interface QueryWishlist {
  wishlists: QueryWishlist_wishlists[];
}

export interface QueryWishlistVariables {
  email: string;
}
