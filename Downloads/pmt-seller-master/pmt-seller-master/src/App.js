import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import HomePage from "./view/Home/HomePage";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routing from "./routes/Routes";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);
  return (
    <>
   
      <Routing />
    </>
  );
}

export default App;
