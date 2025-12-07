import Footer from "./Footer"
import Header from "./Header"

const Page = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}

export default Page

// This page will wrap around all other pages to provide a consistent layout with header and footer