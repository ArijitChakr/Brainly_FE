import axios, { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";
import { BACKEND_URL, ContentsModel } from "../config";

export function useContent() {
  const [contents, setContent] = useState<ContentsModel>([]);
  const [username, setUsername] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const fetchContent = useCallback(async () => {
    setLoading(true);
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
      console.error(e);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchContent();
  }, [fetchContent]);

  return { contents, fetchContent, username, loading };
}
