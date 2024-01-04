import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import AboutPage from './pages/About';
import ContactUsPage from './pages/Contact';
import ProductsAndSalesPage from './pages/Products';
import OurTeamPage from './pages/Team';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path='/contact' element={<ContactUsPage />} />
          <Route path='/products' element={<ProductsAndSalesPage />} />
          <Route path="/team" element={<OurTeamPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
