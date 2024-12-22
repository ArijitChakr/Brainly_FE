import { CopyIcon } from "../icons/CopyIcon";
import { CloseIcon } from "../icons/CrossIcon";
import { Button } from "../ui/button";
import { Input } from "../ui/Input";

export function ShareLinkComp({
  closeModal,
  openModal,
  shareLink,
}: {
  closeModal: () => void;
  openModal: boolean;
  shareLink: string;
}) {
  return (
    <div
      className={`h-screen absolute w-full bg-modal-bg top-0 left-0 z-10 flex justify-center items-center ${
        openModal ? "block" : "hidden"
      }`}
    >
      <div className="h-screen w-screen z-20" onClick={closeModal}></div>
      <div className="bg-white z-30 w-96 px-4 py-6 rounded-lg absolute flex flex-col">
        <div className="flex justify-between text-slate-800  mb-2 cursor-pointer ">
          <div className="text-xl  font-bold px-4">Share your Brain</div>
          <div onClick={closeModal}>
            <CloseIcon size="size-6" />
          </div>
        </div>
        <div className="flex">
          <p className=" text-sm text-slate-500 py-2 px-4">
            Share your entire collection of notes, documents, tweets, posts and
            videos with others. They will be able to import your content into
            their own Second brain.
          </p>
        </div>
        <div className="flex m-auto">
          <Input size="small" type="text" value={shareLink} />
          <Button
            type="secondary"
            text="copy link"
            size="xs"
            startIcon={<CopyIcon size="size-4" />}
            onClick={() => {
              navigator.clipboard.writeText(shareLink);
            }}
          />
        </div>
      </div>
    </div>
  );
}
