import Error404 from "@/components/Error404";
import { useGetBoardById } from "@/fetcher/useGetBoardById";
import { useGetBoardPostById } from "@/fetcher/useGetBoardPostById";
import { Container, Flex, Table, Text, Title } from "@mantine/core";
import { useRouter } from "next/router";
import dayjs from "dayjs";
import Link from "next/link";

const BoardPost = () => {
  const router = useRouter();
  const { id, postId } = router.query;

  const {
    data: board,
    isLoading: isBoardLoading,
    error: isBoardError,
  } = useGetBoardById(id as string);

  const {
    data: post,
    isLoading: isPostLoading,
    error: isPostError,
  } = useGetBoardPostById(id as string, postId as string);

  return (
    <>
      <Container size="md">
        {isBoardLoading || isPostLoading ? (
          // <div>로딩중...</div>
          <div></div>
        ) : (isBoardError || isPostError) && id !== undefined ? (
          <Error404 message="게시물을 찾을 수 없습니다" />
        ) : (
          <>
            <Flex direction="column" my={30}>
              <Text color="gray" size="sm">
                <Link href={`/board/${id}`}>{board?.board_name}</Link>
              </Text>
              <Title order={2}>{post?.title}</Title>

              <Flex gap={20} mt={10}>
                <Text>{post?.user.name}</Text>
                <Text>
                  {dayjs(post?.created_at).format("YYYY-MM-DD HH:mm:ss")}
                </Text>
                {/* <Text>{post?.view_count}</Text> */}
              </Flex>
            </Flex>

            <hr className="my-10" />

            <div dangerouslySetInnerHTML={{ __html: post?.contents }}></div>
          </>
        )}
      </Container>
    </>
  );
};

export default BoardPost;
