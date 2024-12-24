export const BACKEND_URL = "https://brainly-be.onrender.com";
export const FRONTEND_URL = "https://secondbrain-react.netlify.app";

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
