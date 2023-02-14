import type { PropsWithChildren } from "react";

const Header = ({ children }: PropsWithChildren) => (
  <div className="font-semibold text-2xl py-4">{children}</div>
);
export default Header;
