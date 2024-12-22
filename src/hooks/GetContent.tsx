import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import { BACKEND_URL, ContentsModel } from "../config";

export function useContent() {
  const [contents, setContent] = useState<ContentsModel>([]);
  const [username, setUsername] = useState<string>("");

  async function fetchContent() {
    try {
      const response: AxiosResponse = await axios.get(
        `${BACKEND_URL}/api/v1/content`,
        {
          headers: {
            token: localStorage.getItem("token"),
          },
        }
      );
      setContent(response.data.contents);
      setUsername(response.data.username);
    } catch (e) {
      alert(e);
    }
  }

  useEffect(() => {
    fetchContent();
  }, []);

  return { contents, fetchContent, username };
}
