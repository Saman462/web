import "../styles/globals.css";
import "../styles/Slider.css";
import Header from "../components/header";
import Footer from "../components/footer";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <Component {...pageProps} />;{/* <Footer /> */}
    </>
  );
}

export default MyApp;
