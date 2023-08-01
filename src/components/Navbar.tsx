import {
  Button,
  Navbar as MantineNavbar,
  Text,
  createStyles,
  getStylesRef,
  rem,
} from "@mantine/core";
import {
  IconBellRinging,
  IconNews,
  IconSwitchHorizontal,
  IconUsersGroup,
} from "@tabler/icons-react";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const useStyles = createStyles((theme) => ({
  link: {
    ...theme.fn.focusStyles(),
    display: "flex",
    alignItems: "center",
    textDecoration: "none",
    fontSize: theme.fontSizes.sm,
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[1]
        : theme.colors.gray[7],
    padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
    borderRadius: theme.radius.sm,
    fontWeight: 500,

    "&:hover": {
      backgroundColor:
        theme.colorScheme === "dark"
          ? theme.colors.pink[6]
          : theme.colors.pink[0],
      color: theme.colorScheme === "dark" ? theme.white : theme.black,

      [`& .${getStylesRef("icon")}`]: {
        color: theme.colorScheme === "dark" ? theme.white : theme.black,
      },
    },
  },

  linkIcon: {
    ref: getStylesRef("icon"),
    color:
      theme.colorScheme === "dark"
        ? theme.colors.dark[2]
        : theme.colors.gray[6],
    marginRight: theme.spacing.sm,
  },

  linkActive: {
    "&, &:hover": {
      backgroundColor: theme.fn.variant({
        variant: "light",
        color: "pink",
      }).background,
      color: theme.fn.variant({ variant: "light", color: "pink" }).color,
      [`& .${getStylesRef("icon")}`]: {
        color: theme.fn.variant({ variant: "light", color: "pink" }).color,
      },
    },
  },
}));

const data = [
  {
    link: "/board/notice",
    label: "공지사항",
    icon: IconBellRinging,
    keyword: "notice",
  },
  {
    link: "/board/community",
    label: "커뮤니티",
    icon: IconUsersGroup,
    keyword: "community",
  },
  {
    link: "/board/update",
    label: "업데이트 로그",
    icon: IconNews,
    keyword: "update",
  },
];

const Navbar = ({ args }: any) => {
  const { classes, cx } = useStyles();
  const router = useRouter();
  const [active, setActive] = useState("");

  useEffect(() => {
    const { id } = router.query;
    if (id) {
      setActive(id as string);
    } else {
      setActive("");
    }
  }, [router.pathname, router.query, router.query.id]);

  const { burgerOpened } = args;

  const links = data.map((item) => (
    <Link
      className={cx(classes.link, {
        [classes.linkActive]: item.keyword === active,
      })}
      href={item.link}
      key={item.label}
      // onClick={(event) => {
      //   event.preventDefault();
      //   setActive(item.label);
      // }}
    >
      <item.icon className={classes.linkIcon} stroke={1.5} />
      <span>{item.label}</span>
    </Link>
  ));

  return (
    <MantineNavbar
      p="md"
      hiddenBreakpoint="sm"
      hidden={!burgerOpened}
      width={{ sm: 200, lg: 300 }}
    >
      <MantineNavbar.Section grow>{links}</MantineNavbar.Section>
    </MantineNavbar>
  );
};

export default Navbar;
