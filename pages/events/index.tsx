import { useContext, useEffect, useState } from "react";

import axios from "axios";
import type { EventType } from "src/Models";

import { UserContext } from "../_app";

const Events = () => {
  const [events, setEvents] = useState<EventType[]>([]);
  const { user } = useContext(UserContext);
  useEffect(() => {
    axios.get("/api/events").then(data => {
      setEvents(data.data);
    });
  }, []);
  const handleEventDelete = (id: string) => {
    axios.delete(`/api/events`, { data: { id } }).then(data => {
      console.log(data);
    });
  };
  return (
    <div className="flex flex-col items-center">
      {events.map(event => (
        <div key={event._id} className="mb-8">
          {user && (
            <button
              className="float-right text-red-700 border-2 px-8 py-2 rounded-xl border-red-700"
              onClick={() => {
                handleEventDelete(event._id);
              }}
            >
              Delete
            </button>
          )}
          <div className="flex">
            <img
              alt="guest image"
              width={500}
              className="h-fit"
              src={event.imageUrl}
            />
            <div className="w-[500px] ml-8">
              <div className="text-4xl">{event.topic}</div>
              <div className="text-2xl mb-8">{event.guestName}</div>
              <div className="whitespace-pre-line">{event.description}</div>
            </div>
          </div>
        </div>
      ))}
      {events.length === 0 && <div className="text-4xl">Coming soon...</div>}
    </div>
  );
};
export default Events;
