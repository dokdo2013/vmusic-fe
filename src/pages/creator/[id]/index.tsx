import VideoCard from "@/components/VideoCard";
import { useGetCreatorById } from "@/fetcher/useGetCreatorById";
import { useGetCreatorVideosById } from "@/fetcher/useGetCreatorVideosById";
import { Avatar, Flex, Title, Text, SimpleGrid } from "@mantine/core";
import { useRouter } from "next/router";

const Creator = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useGetCreatorById(id as string);
  const {
    data: videos,
    isLoading: isVideoLoading,
    error: videoError,
  } = useGetCreatorVideosById(id as string);

  if (isLoading) return <p>Loading...</p>;
  else if (error) return <p>{error.message}</p>;

  return (
    <div className="p-4">
      <Flex align="flex-start" gap={20} p={20} mb={20}>
        <Avatar
          src={data.profile_image_url}
          alt={data.name}
          size="xl"
          radius="xl"
        />
        <Flex direction="column" justify="center" gap={10}>
          <Title order={1}>{data.name}</Title>
          <Text>{data.description || `아직 지정된 설명이 없어요! 🙏`}</Text>
        </Flex>
      </Flex>

      <Flex direction="column" p={20}>
        <Title order={3} mb={40}>
          노래 영상
        </Title>

        {isVideoLoading && <p>Loading...</p>}
        {videoError && <p>{videoError.message}</p>}
        {videos?.length === 0 && <p>아직 영상이 없어요!</p>}
        <SimpleGrid
          cols={5}
          breakpoints={[
            { maxWidth: "xl", cols: 4, spacing: "md" },
            { maxWidth: "lg", cols: 3, spacing: "md" },
            // { maxWidth: "md", cols: 2, spacing: "md" },
            { maxWidth: "sm", cols: 2, spacing: "sm" },
            { maxWidth: "xs", cols: 1, spacing: "sm" },
          ]}
        >
          {videos?.map((video: any) => (
            <VideoCard video={video} key={video.id} />
          ))}
        </SimpleGrid>
      </Flex>
    </div>
  );
};

export default Creator;
