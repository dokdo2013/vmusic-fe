import { createEmotionCache, EmotionCache } from "@mantine/core";

let cache: EmotionCache | undefined;

export const emotionCache = () => {
  if (!cache) {
    cache = createEmotionCache({
      key: "vmusic-cache-key",
      prepend: false,
    });
  }
  return cache;
};
