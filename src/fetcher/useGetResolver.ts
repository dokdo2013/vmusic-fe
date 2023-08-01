import axios from "axios";
import useSWR from "swr";

const fetcher = async (args: [string, string]): Promise<any> => {
  const result = await axios.get(`/api/resolver?id=${args[1]}`, {
    withCredentials: true,
  });

  return result.data.data;
};

export const useGetResolver = (key: string) => {
  const result = useSWR(["resolver", key], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
