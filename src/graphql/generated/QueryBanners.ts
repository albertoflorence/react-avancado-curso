/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR } from "./globalTypes";

// ====================================================
// GraphQL query operation: QueryBanners
// ====================================================

export interface QueryBanners_banners_image {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface QueryBanners_banners_ribbon {
  __typename: "ComponentPageRibbon";
  text: string;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
}

export interface QueryBanners_banners_button {
  __typename: "ComponentPageLink";
  href: string;
  label: string;
}

export interface QueryBanners_banners {
  __typename: "Banner";
  title: string;
  subtitle: string;
  image: QueryBanners_banners_image | null;
  ribbon: QueryBanners_banners_ribbon | null;
  button: QueryBanners_banners_button | null;
}

export interface QueryBanners {
  banners: QueryBanners_banners[];
}
