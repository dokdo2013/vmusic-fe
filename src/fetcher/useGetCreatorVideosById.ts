import { API_ENDPOINT } from "@/common";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (args: [string, string]): Promise<any> => {
  const result = await axios.get(
    `${API_ENDPOINT}/creator/id/${args[1]}/videos`,
    {
      withCredentials: true,
    }
  );

  return result.data.data;
};

export const useGetCreatorVideosById = (key: string) => {
  const result = useSWR(["/creator/id/videos", key], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
