import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  Group,
  rem,
} from "@mantine/core";
import { Illustration } from "./Error404_illustration";
import Link from "next/link";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  inner: {
    position: "relative",
  },

  image: {
    ...theme.fn.cover(),
    opacity: 0.75,
  },

  content: {
    paddingTop: rem(220),
    position: "relative",
    zIndex: 1,

    [theme.fn.smallerThan("sm")]: {
      paddingTop: rem(120),
    },
  },

  title: {
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    textAlign: "center",
    fontWeight: 900,
    fontSize: rem(38),

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  description: {
    maxWidth: rem(540),
    margin: "auto",
    marginTop: theme.spacing.xl,
    marginBottom: `calc(${theme.spacing.xl} * 1.5)`,
  },
}));

export default function Error404({ message, description }: any) {
  const { classes } = useStyles();

  return (
    <Container className={classes.root}>
      <div className={classes.inner}>
        <Illustration className={classes.image} />
        <div className={classes.content}>
          <Title className={classes.title}>
            {message || "뭔가가 잘못됐어요..."}
          </Title>
          <Text
            color="dimmed"
            size="lg"
            align="center"
            className={classes.description}
          >
            {description ||
              "요청하신 페이지를 찾을 수 없습니다. 링크를 바르게 입력했는지 확인해주세요."}
          </Text>
          <Group position="center">
            <Link href="/">
              <Button size="md">홈 화면으로</Button>
            </Link>
          </Group>
        </div>
      </div>
    </Container>
  );
}
