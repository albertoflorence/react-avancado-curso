/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: SectionFragment
// ====================================================

export interface SectionFragment_highlight_background {
  __typename: "UploadFile";
  url: string;
}

export interface SectionFragment_highlight_image {
  __typename: "UploadFile";
  url: string;
}

export interface SectionFragment_highlight {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: SectionFragment_highlight_background | null;
  image: SectionFragment_highlight_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}

export interface SectionFragment {
  __typename: "ComponentPageSection";
  title: string;
  highlight: SectionFragment_highlight | null;
}
