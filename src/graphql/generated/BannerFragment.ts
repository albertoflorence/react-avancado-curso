/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ENUM_COMPONENTPAGERIBBON_COLOR } from "./globalTypes";

// ====================================================
// GraphQL fragment: BannerFragment
// ====================================================

export interface BannerFragment_image {
  __typename: "UploadFile";
  url: string;
  alternativeText: string | null;
}

export interface BannerFragment_ribbon {
  __typename: "ComponentPageRibbon";
  text: string;
  color: ENUM_COMPONENTPAGERIBBON_COLOR | null;
}

export interface BannerFragment_button {
  __typename: "ComponentPageLink";
  href: string;
  label: string;
}

export interface BannerFragment {
  __typename: "Banner";
  title: string;
  subtitle: string;
  image: BannerFragment_image | null;
  ribbon: BannerFragment_ribbon | null;
  button: BannerFragment_button | null;
}
