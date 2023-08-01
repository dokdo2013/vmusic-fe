import Error404 from "@/components/Error404";
import VideoCard from "@/components/VideoCard";
import CreatorIndexSkeleton from "@/components/skeleton/CreatorIndexSkeleton";
import { TempVideo } from "@/constants/temp-video.constant";
import { useGetCreatorById } from "@/fetcher/useGetCreatorById";
import { useGetCreatorVideosById } from "@/fetcher/useGetCreatorVideosById";
import { Avatar, Flex, Title, Text, SimpleGrid, Skeleton } from "@mantine/core";
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

  if (isLoading) {
    return <p>Loading...</p>;
    // return <CreatorIndexSkeleton />;
  } else if (error && id !== undefined) {
    return (
      <Error404
        message="크리에이터를 찾을 수 없어요"
        description="요청하신 크리에이터를 찾을 수 없어요. 주소를 올바르게 입력했는지 다시 한 번 확인해주세요."
      />
    );
  } else if (error) {
    return <p>{error.message}</p>;
    // return <CreatorIndexSkeleton />;
  }

  return (
    <div className="p-4">
      <Flex align="flex-start" gap={20} p={20} mb={20}>
        <Avatar
          src={data?.profile_image_url}
          alt={data?.name}
          size="xl"
          radius="xl"
        />
        <Flex direction="column" justify="center" gap={10}>
          <Title order={1}>{data?.name}</Title>
          <Text>{data?.description || `아직 지정된 설명이 없어요! 🙏`}</Text>
        </Flex>
      </Flex>

      <Flex direction="column" p={20}>
        <Title order={3} mb={40}>
          노래 영상
        </Title>

        {videoError && <p>{videoError?.message}</p>}
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
    </div>
  );
};

export default Creator;
