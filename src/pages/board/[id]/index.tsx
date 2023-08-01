import Error404 from "@/components/Error404";
import { useGetBoardById } from "@/fetcher/useGetBoardById";
import { useGetBoardPosts } from "@/fetcher/useGetBoardPosts";
import { Container, Title, Text, Flex, Table } from "@mantine/core";
import Link from "next/link";
import { useRouter } from "next/router";
import dayjs from "dayjs";

const Board = () => {
  const router = useRouter();
  const { id } = router.query;

  const {
    data: board,
    isLoading: isBoardLoading,
    error: isBoardError,
  } = useGetBoardById(id as string);

  const {
    data: posts,
    isLoading: isPostsLoading,
    error: isPostsError,
  } = useGetBoardPosts(id as string);

  return (
    <>
      <Container size="md">
        {isBoardLoading || isPostsLoading ? (
          // <div>로딩중...</div>
          <div></div>
        ) : (isBoardError || isPostsError) && id !== undefined ? (
          <Error404 message="게시판을 찾을 수 없습니다" />
        ) : (
          <>
            <Flex direction="column" my={30}>
              <Title order={2}>{board?.board_name}</Title>
              <Text>{board?.board_description}</Text>
            </Flex>

            <Table striped highlightOnHover>
              <thead>
                <tr>
                  <th className="w-[8%] min-w-[60px]">번호</th>
                  <th>제목</th>
                  <th className="w-[16%] min-w-[80px]">글쓴이</th>
                  <th className="w-[16%] min-w-[100px]">날짜</th>
                  <th className="w-[8%] min-w-[60px]">조회수</th>
                </tr>
              </thead>
              <tbody>
                {posts?.map((post: any) => (
                  <tr key={post.id}>
                    <td>{post.id}</td>
                    <td>
                      <Link href={`/board/${id}/post/${post.id}`}>
                        {post.title}
                      </Link>
                    </td>
                    <td>{post.user.name}</td>
                    <td>{dayjs(post.created_at).format("YYYY-MM-DD")}</td>
                    <td>{post.view_count}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </>
        )}
      </Container>
    </>
  );
};

export default Board;
