import { API_ENDPOINT } from "@/common";
import axios from "axios";
import useSWR from "swr";

const fetcher = async (): Promise<any> => {
  const result = await axios.get(`${API_ENDPOINT}/board`, {
    withCredentials: true,
  });

  return result.data.data;
};

export const useGetBoards = () => {
  const result = useSWR(["/board"], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
