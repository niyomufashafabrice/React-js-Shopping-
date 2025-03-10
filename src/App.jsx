import React from 'react'
import './index.css'
import Navbar from './components/navbar/Navbar'
import Hero from './components/Hero/Hero'
import Products from './components/Products/Products'
import AOS from 'aos'
import 'aos/dist/aos.css';
import TopProducts from './components/TopProducts/TopProducts'
import Banner from './components/Banner/Banner'
import Footer from './components/Footer/Footer'

const App = () => {

React.useEffect(() => {
  AOS.init({
    offset: 100,
    duration: 800,
    easing: 'ease-in-sine',
    delay: 100,  
  });
  AOS.refresh();
}, []);

  return (
    <div className=''>
      <Navbar />
      <Hero />
      <Products />
      <TopProducts />
      <Banner />
      <Footer />
    </div>
  )
}

export default App
