import { useContext, useEffect, useState } from "react";

import axios from "axios";
import { useRouter } from "next/router";

import { UserContext } from "../../_app";

const CreateEvent = () => {
  const router = useRouter();
  const { user } = useContext(UserContext);

  useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, []);
  const IMG_BB_API_KEY = process.env.IMG_BB_API_KEY;
  const [image, setImage] = useState<File>();
  const [description, setDescription] = useState<string>("");
  const [guestName, setGuestName] = useState<string>("");
  const [topic, setTopic] = useState<string>("");
  const handleSubmit = async () => {
    let body = new FormData();
    body.set("key", IMG_BB_API_KEY ?? "");
    body.append("image", image ?? "");
    body.append("name", guestName ?? "");
    const imageSubmissionData = await axios.post(
      "https://api.imgbb.com/1/upload?key=" + IMG_BB_API_KEY,
      body,
    );
    axios
      .post("/api/events", {
        topic,
        guestName,
        description,
        imageUrl: imageSubmissionData.data.data.url,
      })
      .then(response => {
        console.log(response);
        alert("success");
        router.push("/");
      })
      .catch(err => {
        console.log(err);
        alert("error");
      });
  };
  return (
    <div className="flex justify-center items-center mt-40 flex-col text-black">
      <input
        type="text"
        onChange={event => setTopic(event.target.value)}
        placeholder="Topic..."
      />
      <input
        type="text"
        onChange={event => {
          setGuestName(event.target.value);
        }}
        className="my-4"
        placeholder="Guest Name..."
      />
      <input
        type="file"
        onChange={event => {
          setImage(event?.target?.files?.[0]);
        }}
        className="text-white mb-4"
      />
      <textarea
        onChange={event => {
          setDescription(event.target.value);
        }}
        placeholder="Description..."
      />
      <button
        className="mt-8 text-xl text-white bg-purple-600 w-32 p-2 rounded-2xl"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};

export default CreateEvent;
