import './App.css';
import Announcement from './components/Announcement';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import NewsLetter from './components/NewsLetter';
import Products from './components/Products';
import Slider from './components/Slider';

function App() {

  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Products />
      <NewsLetter />
      <Footer />
    </>

  );
}

export default App;
