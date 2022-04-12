/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { updateWishlistInput } from "./globalTypes";

// ====================================================
// GraphQL mutation operation: MutationUpdateWishlist
// ====================================================

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_cover {
  __typename: "UploadFile";
  url: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games_developers {
  __typename: "Developer";
  name: string;
}

export interface MutationUpdateWishlist_updateWishlist_wishlist_games {
  __typename: "Game";
  release_date: any | null;
  name: string;
  slug: string;
  cover: MutationUpdateWishlist_updateWishlist_wishlist_games_cover | null;
  price: number;
  developers: MutationUpdateWishlist_updateWishlist_wishlist_games_developers[];
}

export interface MutationUpdateWishlist_updateWishlist_wishlist {
  __typename: "Wishlist";
  games: MutationUpdateWishlist_updateWishlist_wishlist_games[];
}

export interface MutationUpdateWishlist_updateWishlist {
  __typename: "updateWishlistPayload";
  wishlist: MutationUpdateWishlist_updateWishlist_wishlist | null;
}

export interface MutationUpdateWishlist {
  updateWishlist: MutationUpdateWishlist_updateWishlist | null;
}

export interface MutationUpdateWishlistVariables {
  input: updateWishlistInput;
}
