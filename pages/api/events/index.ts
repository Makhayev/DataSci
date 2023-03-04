import type { NextApiRequest, NextApiResponse } from "next";
import Validate from "next-api-validation";
import { Event } from "src/Models";
import type { EventType } from "src/Models/Event";
import { connectToDatabase } from "src/utils";

connectToDatabase();

const eventHandler = Validate({
  async get(req: NextApiRequest, res: NextApiResponse) {
    console.log(req.body);
    const Events = await Event.find();
    res.json(Events);
  },
  async post(req: NextApiRequest, res: NextApiResponse) {
    try {
      const body: EventType = req.body;
      const newEvent = new Event(body);
      const saved = await newEvent.save();
      res.send(saved);
    } catch (err) {
      console.log(err);
      res.status(500).send("error");
    }
  },
  async delete(req: NextApiRequest, res: NextApiResponse) {
    const { id } = req.body;
    try {
      const deletedEvent = await Event.findByIdAndDelete(id);
      res.send(deletedEvent);
    } catch (err) {
      res.status(500).send({
        error: "Failed to delete event",
      });
    }
  },
});

export default eventHandler;
