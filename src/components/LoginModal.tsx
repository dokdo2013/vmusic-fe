import { API_ENDPOINT } from "@/common";
import { Button, Flex, Modal } from "@mantine/core";
import { IconBrandTwitch } from "@tabler/icons-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const LoginModal = ({ opened, onClose }: any) => {
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();

  useEffect(() => {
    setCurrentPath(window.location.pathname);
  }, [router]);

  return (
    <Modal opened={opened} onClose={onClose} title="통합 로그인">
      <Flex direction="column" gap={10} my={20}>
        <a href={`${API_ENDPOINT}/user/twitch?path=${currentPath}`}>
          <Button
            color="violet"
            size="md"
            fullWidth
            leftIcon={<IconBrandTwitch />}
          >
            Twitch 로그인
          </Button>
        </a>

        <Button color="pink" size="md" fullWidth disabled>
          X 로그인 (지원 예정)
        </Button>
        <Button color="pink" size="md" fullWidth disabled>
          구글 로그인 (지원 예정)
        </Button>
        <Button color="pink" size="md" fullWidth disabled>
          카카오 로그인 (지원 예정)
        </Button>
      </Flex>
    </Modal>
  );
};

export default LoginModal;
