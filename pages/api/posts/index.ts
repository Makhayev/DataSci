import type { NextApiRequest, NextApiResponse } from "next";
import Validate from "next-api-validation";
import type { IPost } from "src/Models";
import { Post } from "src/Models";
import { connectToDatabase } from "src/utils";

connectToDatabase();

const postsHandler = Validate({
  async get(req: NextApiRequest, res: NextApiResponse) {
    try {
      console.log(req);
      const posts = await Post.find();
      res.json(posts.reverse());
    } catch (err) {
      res.status(500).send("error");
    }
  },
  async post(req: NextApiRequest, res: NextApiResponse) {
    try {
      const body: IPost = JSON.parse(req.body);
      const newPost = new Post(body);
      const saved = await newPost.save();
      res.send(saved);
    } catch (err) {
      console.log(err);
      res.status(500).send("error");
    }
  },
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.query;
    try {
      const deletedPost = await Post.findByIdAndDelete(id);
      res.send(deletedPost);
    } catch (err) {
      res.status(500).send({
        error: "Failed to remove post",
      });
    }
  },
});

export default postsHandler;
