import { useState } from "react";
import { Button } from "../ui/button";
import { Card } from "../components/Card";
import { PlusIcon } from "../icons/PlusIcon";
import { ShareIcon } from "../icons/ShareIcon";
import { Modal } from "./Modal";
import { Sidebar } from "./SidebarComp";
import { ShareLinkComp } from "./ShareModal";
import { useContent } from "../hooks/GetContent";
import axios from "axios";
import { BACKEND_URL } from "../config";

export function Dashboard() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { contents, username, loading, fetchContent } = useContent();
  const [share, setShare] = useState<boolean>(false);
  const [shareLink, setShareLink] = useState<string>("");

  async function shareBrain() {
    const response = await axios.post(
      `${BACKEND_URL}/api/v1/brain/share`,
      {
        share: true,
      },
      {
        headers: {
          token: localStorage.getItem("token"),
        },
      }
    );
    setShareLink(`localhost:5173/share/${response.data.link}`);
    setShare(true);
  }

  return (
    <div className=" w-full min-h-screen flex">
      <Sidebar />
      <div className="w-full bg-body-bg p-4">
        <div className="flex justify-between">
          <div>
            <h1 className="text-2xl font-bold text-slate-700 mx-4">{`Welcome, ${username}`}</h1>
          </div>
          <div className="flex">
            <Button
              type="secondary"
              text="Share Brain"
              size="md"
              startIcon={<ShareIcon size="size-6" />}
              onClick={shareBrain}
            />
            <Button
              type="primary"
              text="Add Content"
              size="md"
              startIcon={<PlusIcon size="size-6" />}
              onClick={() => {
                setOpenModal(true);
              }}
            />
          </div>
        </div>
        <div className="flex gap-4 p-4 flex-wrap">
          {contents?.length > 0
            ? contents?.map(({ type, title, link, _id }, index) => (
                <Card
                  key={index}
                  title={title}
                  type={type}
                  link={link}
                  id={_id}
                  isDeletable={true}
                  fetchContent={fetchContent}
                />
              ))
            : !loading && (
                <h1 className="mx-auto font-bold text-2xl my-6">
                  No Contents added yet, please add some content to view here
                </h1>
              )}
        </div>
        {loading && <p className="text-xl font-bold text-center">Loading...</p>}
        <Modal
          openModal={openModal}
          closeModal={() => {
            setOpenModal(false);
            fetchContent();
          }}
        />
        <ShareLinkComp
          openModal={share}
          closeModal={() => {
            setShare(false);
          }}
          shareLink={shareLink}
        />
      </div>
    </div>
  );
}
