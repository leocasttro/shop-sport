import './App.css';
import Announcement from './components/Announcement';
import Categories from './components/Categories';
import Footer from './components/Footer';
import Navbar from './components/NavBar';
import Slider from './components/Slider';

function App() {

  return (
    <>
      <Announcement />
      <Navbar />
      <Slider />
      <Categories />
      <Footer />
    </>

  );
}

export default App;
