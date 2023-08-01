import { Avatar, Flex, Title, Text, SimpleGrid, Skeleton } from "@mantine/core";
import VideoCard from "../VideoCard";
import { TempVideo } from "@/constants/temp-video.constant";

const CreatorIndexSkeleton = () => {
  return (
    <div className="p-4">
      <Flex align="flex-start" gap={20} p={20} mb={20}>
        <Skeleton width={100} height={100} />
        <Flex direction="column" justify="center" gap={10}>
          <Skeleton width={100} height={40}></Skeleton>
          <Skeleton>
            <Text>아직 지정된 설명이 없어요! 아직 지정된 설명이 없어요!</Text>
          </Skeleton>
        </Flex>
      </Flex>

      <Flex direction="column" p={20}>
        <Title order={3} mb={40}>
          노래 영상
        </Title>

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
          <VideoCard video={TempVideo} skeleton={true} />
          <VideoCard video={TempVideo} skeleton={true} />
          <VideoCard video={TempVideo} skeleton={true} />
          <VideoCard video={TempVideo} skeleton={true} />
          <VideoCard video={TempVideo} skeleton={true} />
          <VideoCard video={TempVideo} skeleton={true} />
          <VideoCard video={TempVideo} skeleton={true} />
        </SimpleGrid>
      </Flex>
    </div>
  );
};

export default CreatorIndexSkeleton;
