export const BACKEND_URL = "http://13.49.69.74:3000";

export type ContentType =
  | "youtube"
  | "twitter"
  | "linkdin"
  | "instagram"
  | "googledoc";

export type ContentsModel = {
  title: string;
  link: string;
  type: ContentType;
  _id: string;
}[];
