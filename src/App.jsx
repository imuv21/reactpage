import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/header/Header';
import Home from './components/Home';
import Footer from './components/Footer';
import Slider from './components/Slider';

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Slider />
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
};

export default App;
