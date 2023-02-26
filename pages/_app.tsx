import "styles/globals.css";
import { createContext, useEffect, useMemo, useState } from "react";

import type { AppProps } from "next/app";
import Head from "next/head";
import { Layout } from "src/components";

import { submitLogin } from "../src/api";
import type { UserType } from "../src/Models";

export const UserContext = createContext<{
  signIn: (values: { email: string; password: string }) => void;
  signOut: () => void;
  user: UserType | undefined;
}>({
  user: undefined,
  signIn: () => {},
  signOut: () => {},
});

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [user, setUser] = useState<UserType | undefined>(undefined);
  const signIn = async (values: { email: string; password: string }) => {
    console.log(values);
    const response = await submitLogin(values.email, values.password);
    console.log(response);
    if (!response) {
      alert("Login failed");
    } else {
      localStorage.setItem("user", JSON.stringify(response));
      setUser(response);
    }
  };
  const signOut = () => {
    localStorage.removeItem("user");
    setUser(undefined);
  };

  useEffect(() => {
    const user = localStorage.getItem("user");
    if (user) {
      setUser(JSON.parse(user));
    }
  }, []);

  return (
    <UserContext.Provider value={{ signIn, signOut, user }}>
      {children}
    </UserContext.Provider>
  );
};

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>DataSci</title>
        <link rel="icon" href="/DataSciIcon.png" />
      </Head>
      <UserContextProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </UserContextProvider>
    </>
  );
}
