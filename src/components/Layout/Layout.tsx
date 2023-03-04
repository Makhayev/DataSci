import type { PropsWithChildren } from "react";

import { Header } from "src/components";

export const Layout = ({ children }: PropsWithChildren) => (
  <>
    <Header />
    {children}
    {/*<Footer />*/}
  </>
);
