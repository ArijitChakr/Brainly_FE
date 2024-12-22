import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { BACKEND_URL, ContentsModel } from "../config";
import { Card } from "./Card";

export function SharePage() {
  const params = useLocation();
  const [contents, setContents] = useState<ContentsModel>([]);
  const [username, setUsername] = useState<string>("");

  useEffect(() => {
    async function sharedContents() {
      const hash = params.pathname.split("/").pop();
      const response = await axios.get(`${BACKEND_URL}/api/v1/brain/${hash}`);

      setContents(response.data.content);
      setUsername(response.data.username);
    }
    sharedContents();
  }, [params]);

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold my-4">Shared by {username}</h1>
      <div className="flex gap-4">
        {contents?.map(({ type, title, link, _id }, index) => (
          <Card
            key={index}
            title={title}
            type={type}
            link={link}
            id={_id}
            isDeletable={false}
          />
        ))}
      </div>
    </div>
  );
}
