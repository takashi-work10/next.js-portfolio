import "./styles/all.css";
import "./styles/blog.css";
import "./styles/common.css";
import "./styles/contact.css";
import "./styles/index.css";
import "./styles/singleBlog.css";

import Header from "./components/header";
import Footer from "./components/footer";
import { ReactNode } from "react";

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
