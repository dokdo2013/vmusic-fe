import { API_ENDPOINT } from "@/common";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (): Promise<any> => {
  const result = await axios.get(`${API_ENDPOINT}/video`, {
    withCredentials: true,
  });

  return result.data.data;
};

export const useGetVideos = () => {
  const result = useSWR(["/video"], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
