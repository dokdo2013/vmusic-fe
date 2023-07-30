import { useGetCreatorById } from "@/fetcher/useGetCreatorById";
import { useRouter } from "next/router";

const Creator = () => {
  const router = useRouter();
  const { id } = router.query;
  const { data, isLoading, error } = useGetCreatorById(id as string);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div>
      <h1>{data.name}</h1>
      <p>{data.profile_image_url}</p>
    </div>
  );
};

export default Creator;
