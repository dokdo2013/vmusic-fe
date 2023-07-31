import { AspectRatio, Avatar, Card, Flex, Image, Text } from "@mantine/core";
import Link from "next/link";

const VideoCard = ({ video }: any) => {
  const { id, title, thumbnail_image_url } = video;

  return (
    <Link href={`/video/${id}`}>
      <Card
        shadow="sm"
        padding="md"
        h="100%"
        // component="a"
        // href={`/video/${id}`}
        // target="_blank"
      >
        <Card.Section>
          <AspectRatio ratio={2 / 1}>
            <Image src={thumbnail_image_url} alt={title} />
          </AspectRatio>
        </Card.Section>

        <Flex direction="row" mt="md">
          <Link href={`/creator/${video?.creator?.id}`}>
            <Avatar
              src={video?.creator?.profile_image_url}
              size="sm"
              radius="xl"
              mr="sm"
            />
          </Link>

          <Flex gap={10} align="left" direction="column">
            <Link href={`/video/${id}`}>
              <Text weight={500} size="md">
                {title}
              </Text>
            </Link>
            <Link href={`/creator/${video?.creator?.id}`}>
              <Text size="sm" color="dimmed">
                {video?.creator?.name}
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
