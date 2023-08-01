import { API_ENDPOINT } from "@/common";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (args: [string, string]): Promise<any> => {
  const result = await axios.get(`${API_ENDPOINT}/board/${args[1]}/post`, {
    withCredentials: true,
  });

  return result.data.data;
};

export const useGetBoardPosts = (key: string) => {
  const result = useSWR(["/board/id/post", key], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
