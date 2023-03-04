import { useContext, useEffect, useState } from "react";

import { useRouter } from "next/router";

import { UserContext } from "../_app";

const Login = () => {
  const router = useRouter();

  const { signIn, user } = useContext(UserContext);
  useEffect(() => {
    if (user) {
      router.push("/");
    }
  }, []);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const submitForm = async () => {
    signIn({ email, password });
  };
  return (
    <div className="flex flex-col items-center mt-40 justify-center">
      <div className="text-3xl mb-8">Login</div>
      <div>{user?.email}</div>
      <div>
        <div>email</div>
        <input
          onChange={event => {
            setEmail(event.target.value);
          }}
          className="text-black"
          name="email"
        />
      </div>
      <div>
        <div>password</div>
        <input
          onChange={event => {
            setPassword(event.target.value);
          }}
          className="text-black"
          name="password"
        />
      </div>
      <div className="flex justify-center">
        <button
          type="submit"
          onClick={submitForm}
          className="mt-8 text-xl bg-purple-600 w-32 p-2 rounded-2xl"
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Login;
