import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  AppShell,
  Badge,
  Burger,
  Button,
  Flex,
  Header,
  MantineProvider,
  MediaQuery,
  Navbar,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { useState } from "react";
import { emotionCache } from "@/emotionCache";
import { useGetUser } from "@/fetcher/useGetUser";
import Link from "next/link";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  // 로그인 여부 체크
  const { data: userInfo, error } = useGetUser();

  return (
    <>
      <Head>
        <title>브이뮤직</title>
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>

      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        emotionCache={emotionCache()}
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <AppShell
          styles={{
            main: {
              background:
                theme.colorScheme === "dark"
                  ? theme.colors.dark[8]
                  : theme.colors.gray[0],
            },
          }}
          padding={0}
          navbarOffsetBreakpoint="sm"
          asideOffsetBreakpoint="sm"
          navbar={
            <Navbar
              p="md"
              hiddenBreakpoint="sm"
              hidden={!opened}
              width={{ sm: 200, lg: 300 }}
            >
              <Text>기능 준비 중입니다</Text>
            </Navbar>
          }
          header={
            <Header height={{ base: 50, md: 70 }} p="md">
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                }}
              >
                <MediaQuery largerThan="sm" styles={{ display: "none" }}>
                  <Burger
                    opened={opened}
                    onClick={() => setOpened((o) => !o)}
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
                    <>{userInfo.user.name}</>
                  ) : (
                    <a href="http://localhost:8000/user/twitch">
                      <Button color="pink" size="xs">
                        Twitch 로그인
                      </Button>
                    </a>
                  )}
                </Flex>
              </div>
            </Header>
          }
        >
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
