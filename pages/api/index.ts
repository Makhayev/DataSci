import type { NextApiResponse } from "next";

export default function apiIndex(res: NextApiResponse) {
  res.json({
    message: "hi",
  });
}
