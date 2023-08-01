import { API_ENDPOINT } from "@/common";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (args: [string, string, string]): Promise<any> => {
  const result = await axios.get(
    `${API_ENDPOINT}/board/${args[1]}/post/${args[2]}`,
    {
      withCredentials: true,
    }
  );

  return result.data.data;
};

export const useGetBoardPostById = (key1: string, key2: string) => {
  const result = useSWR(["/board/id/post/postId", key1, key2], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
