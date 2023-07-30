import { useRouter } from "next/router";

const Video = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default Video;
