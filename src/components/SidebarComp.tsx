import { ReactElement } from "react";
import { BrainlyLogo } from "../icons/BrainlyLogo";
import { TwitterIcon } from "../icons/TwitterIcon";
import { DocumentIcon } from "../icons/LinkdinIcon";
import { YoutubeIcon } from "../icons/YoutubeIcon";
import { Button } from "../ui/button";
import { useNavigate } from "react-router-dom";

export function Sidebar() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem("token");
    navigate("/signup");
  }

  return (
    <div className="h-screen w-80 border-r border-sidebar-border bg-white  ">
      <div className="text-logo-bg flex items-center px-8 py-4">
        <BrainlyLogo size="size-8" />
        <h1 className="text-sidebar-h1 text-2xl font-bold pl-4">Brainly</h1>
      </div>
      <div className="mt-10 mx-2">
        <SidebarComponent icon={<TwitterIcon size="size-6" />} text="Tweets" />
        <SidebarComponent icon={<YoutubeIcon size="size-6" />} text="Videos" />
        <SidebarComponent icon={<DocumentIcon size="size-6" />} text="Posts" />
      </div>
      <div className="mx-2 my-10">
        <Button type="secondary" text="Logout" size="full" onClick={logout} />
      </div>
    </div>
  );
}

function SidebarComponent({
  icon,
  text,
}: {
  icon: ReactElement;
  text: string;
}) {
  return (
    <div className=" transition-all rounded-md flex items-center my-3 px-8 py-2 w-full cursor-pointer hover:bg-slate-200">
      <div className="pr-4 text-sidebar-icon">{icon}</div>
      <div className="text-xl text-sidebar-text ">{text}</div>
    </div>
  );
}
