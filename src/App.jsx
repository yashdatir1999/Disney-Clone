import React from 'react'
import Header from './componets/Header'
import Slider from './componets/Slider'
import ProductionHouse from './componets/ProductionHouse'
import GenreMovieList from './componets/GenreMovieList'
import Footer from './componets/Footer'

const App = () => {
  return (
    <div className='bg-[#131520]'>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
      <Footer />
    </div>
  )
}

export default App