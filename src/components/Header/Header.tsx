import { useContext } from "react";

import Link from "next/link";
import { UserContext } from "pages/_app";

export const Header = () => {
  const { user, signOut } = useContext(UserContext);
  return (
    <div>
      <div className="flex p-16 justify-between text-2xl items-center">
        <div className="flex">
          <div>
            <Link href="/">Home</Link>
          </div>
          <div className="mx-16">
            <Link href="/events">Events</Link>
          </div>
          {user && (
            <div>
              <Link href="/events/create"> Create Event</Link>
            </div>
          )}
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
