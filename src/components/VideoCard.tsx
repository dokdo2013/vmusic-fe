import {
  AspectRatio,
  Avatar,
  Card,
  Flex,
  Image,
  Skeleton,
  Text,
} from "@mantine/core";
import Link from "next/link";

const VideoCard = ({ video, skeleton }: any) => {
  const { id, title, thumbnail_image_url } = video;

  return (
    <Link href={`/video/${id}`}>
      <Card shadow="sm" padding="md" h="100%">
        <Card.Section>
          <AspectRatio ratio={2 / 1}>
            <Skeleton visible={!!skeleton}>
              <Image src={thumbnail_image_url} alt={title} />
            </Skeleton>
          </AspectRatio>
        </Card.Section>

        <Flex direction="row" mt="md">
          <Link href={`/creator/${video?.creator?.id}`}>
            {!skeleton && (
              <Avatar
                src={video?.creator?.profile_image_url}
                size="md"
                radius="xl"
                mr="sm"
              />
            )}
            <Skeleton visible={!!skeleton} width={26} height={26} radius="xl" />
          </Link>

          <Flex gap={10} align="left" direction="column">
            <Link href={`/video/${id}`}>
              <Text weight={500} size="md" lineClamp={2}>
                <Skeleton visible={!!skeleton}>{title}</Skeleton>
              </Text>
            </Link>
            <Link href={`/creator/${video?.creator?.id}`}>
              <Text size="sm" color="dimmed" lineClamp={1}>
                <Skeleton visible={!!skeleton}>{video?.creator?.name}</Skeleton>
              </Text>
            </Link>
          </Flex>
        </Flex>

        {/* <Text mt="xs" color="dimmed" size="sm">
          Please click anywhere on this card to claim your reward, this is not a
          fraud, trust us
        </Text> */}
      </Card>
    </Link>
  );
};

export default VideoCard;
