import type { NextApiRequest, NextApiResponse } from "next";
import Validate from "next-api-validation";
import type { UserType } from "src/Models";
import { User } from "src/Models";
import { connectToDatabase } from "src/utils";

connectToDatabase();

const usersHandler = Validate({
  async post(req: NextApiRequest, res: NextApiResponse) {
    try {
      const body: UserType = req.body;
      const user = await User.findOne({
        email: body.email,
        password: body.password,
      });
      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).send("error");
    }
  },
  async put(req: NextApiRequest, res: NextApiResponse) {
    try {
      const body: UserType = req.body;
      const newUser = new User(body);
      const saved = await newUser.save();
      res.send(saved);
    } catch (err) {
      console.log(err);
      res.status(500).send("error");
    }
  },
});

export default usersHandler;
