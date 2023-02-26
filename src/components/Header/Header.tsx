import { useContext } from "react";

import Link from "next/link";
import { UserContext } from "pages/_app";

export const Header = () => {
  const { user, signOut } = useContext(UserContext);
  return (
    <div>
      <div className="flex p-16 justify-between text-2xl items-center">
        <div className="flex">
          <div className="mr-16">
            <Link href="/">Home</Link>
          </div>
          <div>
            <Link href="/Events">Events</Link>
          </div>
        </div>
        <div className="flex">
          <div>
            {user ? (
              <div>Welcome {user?.name}</div>
            ) : (
              <Link href="/login">Login</Link>
            )}
          </div>
          {user && (
            <div className="ml-16 cursor-pointer" onClick={signOut}>
              Logout
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
