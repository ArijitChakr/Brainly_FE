import { ReactElement } from "react";
import { ShareIcon } from "../icons/ShareIcon";
import { DeleteIcon } from "../icons/DeleteIcon";
import {
  YouTubeEmbed,
  LinkedInEmbed,
  XEmbed,
  InstagramEmbed,
} from "react-social-media-embed";
import { BACKEND_URL, ContentType } from "../config";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { TwitterIcon } from "../icons/TwitterIcon";
import { PostIcon } from "../icons/PostIcon";
import { DocumentIcon } from "../icons/LinkdinIcon";
import axios from "axios";

interface CardType {
  type: ContentType;
  title: string;
  link: string;
  id: string;
  isDeletable: boolean;
}

const embedComponents: Record<
  string,
  ({ link }: { link: string }) => ReactElement
> = {
  youtube: ({ link }: { link: string }) => (
    <YouTubeEmbed url={link} className="w-full" />
  ),
  twitter: ({ link }: { link: string }) => (
    <XEmbed url={link} className="w-full" />
  ),
  linkdin: ({ link }: { link: string }) => (
    <LinkedInEmbed url={link} className="w-full" />
  ),
  instagram: ({ link }: { link: string }) => (
    <InstagramEmbed url={link} className="w-full" />
  ),
  googledoc: ({ link }: { link: string }) => (
    <iframe src={`${link}?embedded=true`} className="w-full"></iframe>
  ),
};

const contentIcon = {
  youtube: () => <YoutubeIcon size="size-6" />,
  twitter: () => <TwitterIcon size="size-6" />,
  linkdin: () => <PostIcon size="size-6" />,
  facebook: () => <PostIcon size="size-6" />,
  instagram: () => <PostIcon size="size-6" />,
  googledoc: () => <DocumentIcon size="size-6" />,
};

export function Card({ title, link, type, id, isDeletable }: CardType) {
  const EmbedComponents = embedComponents[type];
  const ContentIcon = contentIcon[type];

  async function deletePost() {
    await axios.delete(`${BACKEND_URL}/api/v1/content`, {
      headers: {
        token: localStorage.getItem("token"),
      },
      data: {
        id: id,
      },
    });

    window.location.reload();
  }
  return (
    <div className="w-80 p-4 border border-card-border rounded-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          {ContentIcon && <ContentIcon />}
          <h3 className="pl-4 text-lg">{title}</h3>
        </div>
        <div className="flex items-center  text-sidebar-text">
          <div className="mr-2 cursor-pointer">
            <a href={link} target="_blank">
              <ShareIcon size="size-5" />
            </a>
          </div>
          {isDeletable && (
            <div className="ml-2 cursor-pointer" onClick={deletePost}>
              <DeleteIcon size="size-5" />
            </div>
          )}
        </div>
      </div>
      <div className="py-4">
        {EmbedComponents && <EmbedComponents link={link} />}
      </div>
    </div>
  );
}
