/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: HighlightFragment
// ====================================================

export interface HighlightFragment_background {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment_image {
  __typename: "UploadFile";
  url: string;
}

export interface HighlightFragment {
  __typename: "ComponentPageHighlight";
  title: string;
  subtitle: string;
  background: HighlightFragment_background | null;
  image: HighlightFragment_image | null;
  buttonLabel: string;
  buttonLink: string;
  reverse: boolean;
}
