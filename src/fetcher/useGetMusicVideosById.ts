import axios from "axios";
import useSWR from "swr";

const fetcher = async (args: [string, string]): Promise<any> => {
  const result = await axios.get(
    `${process.env.NEXT_PUBLIC_API_ENDPOINT}/music/${args[1]}/videos`,
    {
      withCredentials: true,
    }
  );

  return result.data.data;
};

export const useGetMusicVideosById = (key: string) => {
  const result = useSWR(["/music/id/videos", key], fetcher, {
    revalidateOnFocus: false,
    errorRetryCount: 1,
  });

  return result;
};
