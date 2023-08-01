import "../styles/globals.css";
import { AppProps } from "next/app";
import Head from "next/head";
import {
  AppShell,
  Badge,
  Burger,
  Button,
  Flex,
  MantineProvider,
  MediaQuery,
  Text,
  Title,
  useMantineTheme,
} from "@mantine/core";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import { useState } from "react";
import { emotionCache } from "@/emotionCache";
import LoginModal from "@/components/LoginModal";
import { useDisclosure } from "@mantine/hooks";

export default function App(props: AppProps) {
  const { Component, pageProps } = props;
  const theme = useMantineTheme();
  const [burgerOpened, setBurgerOpened] = useState(false);
  const [isLoginModalOpened, { open: openLoginModal, close: closeLoginModal }] =
    useDisclosure(false);

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
          navbar={<Navbar args={{ burgerOpened }} />}
          header={
            <Header
              args={{ burgerOpened, setBurgerOpened, theme, openLoginModal }}
            />
          }
        >
          <LoginModal opened={isLoginModalOpened} onClose={closeLoginModal} />
          <Component {...pageProps} />
        </AppShell>
      </MantineProvider>
    </>
  );
}
