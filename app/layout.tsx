import "./styles/all.css"
import "./styles/blog.css"
import "./styles/common.css" 
import "./styles/contact.css"
import "./styles/index.css"
import "./styles/singleBlog.css"
import Header from "./components/header"
import Footer from "./components/footer"

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <body>
        {children}
      </body>
    </html>
  );
};

export default RootLayout