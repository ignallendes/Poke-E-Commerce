import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ProductCard from './components/productCard/productCard'
import { pokedex } from './assets/mocks/pokedex.js'



function App() {
  return (
    <>
      <Header />
      <div id="pokedexCoatainer">
        {
          pokedex[0].pokemons.map((pokemon) => (
            <ProductCard
              key={pokemon.id}
              num={pokemon.num}
              name={pokemon.name}
              img={pokemon.img}
              type={pokemon.type}
              height={pokemon.height}
              weight={pokemon.weight}
            />
          ))
        }
      </div>
      <Footer />
    </>

  )
}

export default App
