import VideoCard from "@/components/VideoCard";
import { useGetMusicById } from "@/fetcher/useGetMusicById";
import { useGetMusicVideosById } from "@/fetcher/useGetMusicVideosById";
import { Avatar, Flex, Title, Text, SimpleGrid } from "@mantine/core";
import { useRouter } from "next/router";

const Music = () => {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, error } = useGetMusicById(id as string);
  const {
    data: videos,
    isLoading: isVideoLoading,
    error: videoError,
  } = useGetMusicVideosById(id as string);

  if (isLoading) return <p>Loading...</p>;
  else if (error) return <p>{error.message}</p>;

  return (
    <div className="p-4">
      <Flex align="flex-start" gap={20} p={20} mb={20}>
        <Avatar
          src={data.cover_image_url}
          alt={data.name}
          size="xl"
          // radius="xl"
        />
        <Flex direction="column" justify="center" gap={15}>
          <Title order={2}>{data.name}</Title>
          <Flex align="center" gap={10}>
            <Avatar
              src={data.author.profile_image_url}
              alt={data.author.name}
              size="sm"
              radius="xl"
            />
            <Text>{data.author.name}</Text>
          </Flex>
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
          cols={6}
          breakpoints={[
            { maxWidth: "xl", cols: 5, spacing: "md" },
            { maxWidth: "lg", cols: 4, spacing: "md" },
            { maxWidth: "md", cols: 3, spacing: "md" },
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

export default Music;
