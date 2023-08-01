import { Flex, Title, SimpleGrid } from "@mantine/core";
import VideoCard from "@/components/VideoCard";
import { useGetVideos } from "@/fetcher/useGetVideos";

export default function Index() {
  const {
    data: videos,
    isLoading: isVideoLoading,
    error: videoError,
  } = useGetVideos();

  return (
    <Flex direction="column" p={20}>
      <Title order={3} mb={40}>
        최근 등록된 영상
      </Title>

      {isVideoLoading && <p>Loading...</p>}
      {videoError && <p>{videoError.message}</p>}
      {videos?.length === 0 && <p>아직 영상이 없어요!</p>}
      <SimpleGrid
        cols={6}
        breakpoints={[
          { maxWidth: "2000", cols: 5, spacing: "md" },
          { maxWidth: "xl", cols: 4, spacing: "md" },
          { maxWidth: "lg", cols: 3, spacing: "md" },
          { maxWidth: "sm", cols: 2, spacing: "sm" },
          { maxWidth: "xs", cols: 1, spacing: "sm" },
        ]}
      >
        {videos?.map((video: any) => (
          <VideoCard video={video} key={video.id} />
        ))}
      </SimpleGrid>
    </Flex>
  );
}
