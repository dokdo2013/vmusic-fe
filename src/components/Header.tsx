import { API_ENDPOINT } from "@/common";
import { useGetUser } from "@/fetcher/useGetUser";
import {
  Header as MantineHeader,
  Burger,
  MediaQuery,
  Flex,
  Title,
  Badge,
  Button,
} from "@mantine/core";
import Link from "next/link";

const Header = ({ args }: any) => {
  const { burgerOpened, setBurgerOpened, theme, openLoginModal } = args;

  // 로그인 여부 체크
  const { data: userInfo, error } = useGetUser();

  return (
    <MantineHeader height={{ base: 50, md: 70 }} p="md">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          height: "100%",
        }}
      >
        <MediaQuery largerThan="sm" styles={{ display: "none" }}>
          <Burger
            opened={burgerOpened}
            onClick={() => setBurgerOpened((o: any) => !o)}
            size="sm"
            color={theme.colors.gray[6]}
            mr="xl"
          />
        </MediaQuery>

        <Flex justify={"space-between"} className="w-full">
          <Link href="/">
            <Flex align="center" gap={10}>
              <Title className="cafe24_supermagic_bold" order={2}>
                브이뮤직{" "}
              </Title>
              <Badge color="pink" variant="light">
                Beta
              </Badge>
            </Flex>
          </Link>

          {userInfo && !error ? (
            <a href={`${API_ENDPOINT}/user/logout`}>{userInfo.user.name}</a>
          ) : (
            <Button color="pink" size="sm" onClick={openLoginModal}>
              로그인
            </Button>
          )}
        </Flex>
      </div>
    </MantineHeader>
  );
};

export default Header;
