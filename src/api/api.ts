import axios from "axios";

const AxiosInstance = axios.create({});

export const submitLogin = async (email: string, password: string) => {
  const res = await AxiosInstance.post("/api/users", { email, password });
  return res.data;
};
