import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
//import { pokedex } from '.src/mocks/pokedex.js'
import ProductCard from './components/productCard/productCard'


function App() {
  return (
    <>
      <Header />
      <ProductCard
        num="001"
        name="Bulbasaur"
        img="https://www.serebii.net/pokemon/art/001.png"
        type={["Grass", "Poison"]}
        height="0.71 m"
        weight="6.9 kg"
      />

      <Footer />
    </>

  )
}

export default App
