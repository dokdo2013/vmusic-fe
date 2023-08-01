import axios from "axios";

export default async function handler(req: any, res: any) {
  // https://yt.lemnoslife.com/noKey/videos?part=snippet&id={id}

  const {
    query: { id },
  } = req;

  if (!id) {
    res.status(400).json({
      error: "Missing id",
    });
    return;
  }

  const result = await axios.get(
    `https://yt.lemnoslife.com/noKey/videos?part=snippet&id=${id}`,
    {
      withCredentials: true,
    }
  );

  if (result.data.error) {
    res.status(400).json(result.data);
    return;
  }

  res.status(200).json(result.data);
}
