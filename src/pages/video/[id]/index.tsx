import { useGetCreatorById } from "@/fetcher/useGetCreatorById";
import { useGetCreatorVideosById } from "@/fetcher/useGetCreatorVideosById";
import { useGetVideoById } from "@/fetcher/useGetVideoById";
import {
  AspectRatio,
  Flex,
  Title,
  Text,
  Avatar,
  ActionIcon,
  Image,
} from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import YouTube from "react-youtube";
import { IconMessage, IconStar } from "@tabler/icons-react";
import { useGetMusicById } from "@/fetcher/useGetMusicById";

const Video = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: video,
    isLoading: isVideoLoading,
    error: videoError,
  } = useGetVideoById(id as string);
  const { data, isLoading, error } = useGetCreatorById(
    video?.creator_id as string
  );
  const {
    data: music,
    isLoading: isMusicLoading,
    error: musicError,
  } = useGetMusicById(video?.music_id as string);

  return (
    <div>
      <Flex className="w-full">
        {video && !videoError && !isVideoLoading && (
          <div className="w-full h-[calc(100vh-70px)]">
            <AspectRatio ratio={16 / 9} className="w-full h-auto">
              <YouTube
                videoId={video.provider_id}
                style={{
                  width: "100%",
                  height: "100%",
                }}
                opts={{
                  width: "100%",
                  height: "100%",
                  playerVars: {
                    autoplay: 1,
                  },
                }}
              />
            </AspectRatio>
          </div>
        )}

        <Flex direction="column" p={20} className="max-w-xs" bg="white">
          <Flex mb={30}>
            <Link href={`/creator/${data?.id}`}>
              <Flex align="center" gap={10}>
                <Avatar
                  src={data?.profile_image_url}
                  alt={data?.name}
                  size="md"
                  radius="xl"
                />
                <Title order={4}>{data?.name}</Title>
              </Flex>
            </Link>
          </Flex>

          <Title order={3} mb={30}>
            {video?.title}
          </Title>
          <Text>{video?.description}</Text>

          <Flex mb={30} gap={20} justify="flex-end">
            {/* like (emoji & button) */}
            <Flex gap={5} align="center">
              <IconStar size={20} />
              <Text size="sm" color="dimmed">
                0
              </Text>
            </Flex>

            {/* comment (emoji & button) */}
            <Flex gap={5} align="center">
              <IconMessage size={20} />
              <Text size="sm" color="dimmed">
                0
              </Text>
            </Flex>
          </Flex>

          <Link href={`/music/${music?.id}`}>
            <Flex gap={20} className="border p-4 rounded-md" align="center">
              <Avatar
                src={music?.cover_image_url}
                alt={music?.title}
                size="lg"
              />
              <Flex direction="column" gap={5}>
                <Text size="sm">{music?.name}</Text>
                <Flex gap={5} align="center">
                  <Avatar
                    src={music?.author?.profile_image_url}
                    size="xs"
                    radius="xl"
                  />
                  <Text size="xs" color="dimmed">
                    {music?.author?.name}
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Link>

          <Flex mt={40} gap={10} justify="space-between" align="center">
            <Title order={4}>연관 영상</Title>
            <Text color="dimmed" size="sm">
              더보기
            </Text>
          </Flex>
        </Flex>
      </Flex>
    </div>
  );
};

export default Video;
