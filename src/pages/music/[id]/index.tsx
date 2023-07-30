import { useRouter } from "next/router";

const Music = () => {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
};

export default Music;
