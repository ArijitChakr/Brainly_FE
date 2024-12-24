import { useRef, useState } from "react";
import { BACKEND_URL, ContentType } from "../config";
import { CloseIcon } from "../icons/CrossIcon";
import { Button } from "../ui/button";
import { Input } from "../ui/Input";
import axios from "axios";
import { useContent } from "../hooks/GetContent";

export function Modal({
  closeModal,
  openModal,
}: {
  closeModal: () => void;
  openModal: boolean;
}) {
  const [type, setType] = useState<ContentType>("youtube");
  const titleRef = useRef<HTMLInputElement>(null);
  const linkRef = useRef<HTMLInputElement>(null);
  const { fetchContent } = useContent();

  async function addContent() {
    const title = titleRef.current?.value;
    const link = linkRef.current?.value;

    await axios.post(
      `${BACKEND_URL}/api/v1/content`,
      {
        title,
        link: type === "twitter" ? link?.split("/").pop() : link,
        type,
        tags: [],
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );

    await fetchContent();
    closeModal();
  }

  return (
    <div
      className={`h-screen absolute w-full bg-modal-bg top-0 left-0 z-10 flex justify-center items-center ${
        openModal ? "block" : "hidden"
      }`}
    >
      <div className="h-screen w-screen z-20" onClick={closeModal}></div>
      <div className="bg-white z-30 w-80 px-4 py-6 rounded absolute flex flex-col">
        <div className="flex justify-end mb-2 cursor-pointer">
          <div onClick={closeModal}>
            <CloseIcon size="size-6" />
          </div>
        </div>
        <Input
          placeHolder="Title"
          type="text"
          reference={titleRef}
          size="default"
        />
        <Input
          placeHolder="Link"
          type="text"
          reference={linkRef}
          size="default"
        />
        <h4 className="font-semibold ml-2 my-2">Content Type</h4>
        <div className="flex flex-wrap gap-2">
          <Button
            type={type === "youtube" ? "primary" : "secondary"}
            size="sm"
            onClick={() => {
              setType("youtube");
            }}
            text="YouTube Video"
          />
          <Button
            type={type === "twitter" ? "primary" : "secondary"}
            size="sm"
            onClick={() => {
              setType("twitter");
            }}
            text="Tweet"
          />
          <Button
            type={type === "linkdin" ? "primary" : "secondary"}
            size="sm"
            onClick={() => {
              setType("linkdin");
            }}
            text="Linkdin Post"
          />
          <Button
            type={type === "instagram" ? "primary" : "secondary"}
            size="sm"
            onClick={() => {
              setType("instagram");
            }}
            text="Instagram Post"
          />
          <Button
            type={type === "googledoc" ? "primary" : "secondary"}
            size="sm"
            onClick={() => {
              setType("googledoc");
            }}
            text="Google Docs"
          />
        </div>
        <div className="my-2 flex flex-col">
          <Button type="primary" text="Submit" size="md" onClick={addContent} />
        </div>
      </div>
    </div>
  );
}
