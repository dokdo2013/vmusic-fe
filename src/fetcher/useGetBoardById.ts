import axios from "axios";
import useSWR from "swr";

const fetcher = async (args: [string, string]): Promise<any> => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/board/${args[1]}`,
    {
      withCredentials: true,
    }
  );

  return result.data.data;
};

export const useGetBoardById = (key: string) => {
  const result = useSWR(["/board/id", key], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
