import { API_ENDPOINT } from "@/common";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (args: [string, string]): Promise<any> => {
  const result = await axios.get(`${API_ENDPOINT}/music/search/${args[1]}`, {
    withCredentials: true,
  });

  return result.data.data;
};

export const useGetMusicSearch = (key: string) => {
  const result = useSWR(["/music/search", key], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
