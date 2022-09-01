import "../styles/globals.css";
import "../styles/styles.css";
import "../styles/index.scss";
import Header from "../components/header";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;
      <Footer />
    </>
  );
}

export default MyApp;
