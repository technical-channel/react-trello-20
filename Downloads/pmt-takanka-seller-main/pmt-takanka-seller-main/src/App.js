
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import HomePage from './view/Home/HomePage';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Routing from './routes/Routes';

function App() {
  return (
    <>
      <Routing />
    </>
  );
}

export default App;
