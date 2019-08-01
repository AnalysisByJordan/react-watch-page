import React from 'react';
import Header from './components/header';
import Banner from './components/banner'
import Service from './components/service'
import About from './components/about'
import Product from './components/products'
import Faq from './components/faq'
import Subscribe from './components/subscribe'
import Footer from './components/footer'


function App() {
  return (
    <>
    <Header></Header>
    <Banner></Banner>
    <Service></Service>
    <About></About>
    <Product></Product>
    <Faq></Faq>
    <Subscribe></Subscribe>
    <Footer></Footer>
    </>
  );
}

export default App;
