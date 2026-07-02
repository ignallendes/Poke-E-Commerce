import './App.css'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import ProductCardPoke from './components/productCardPoke/productCardPoke'
import { pokedex } from './assets/mocks/pokedex.js'
import { useState } from 'react'


function App() {

  const [cart, setCart] = useState([]);

  function agregarAlCarrito(pokemon) {
    setCart(prevCart => [...prevCart, pokemon]);
  }

  return (
    <>
      <Header cartCount={cart.length} />

      <div id="pokedexCoatainer">
        {
          pokedex[0].pokemons.map((pokemon) => (
            <ProductCardPoke
              key={pokemon.id}
              num={pokemon.num}
              name={pokemon.name}
              img={pokemon.img}
              type={pokemon.type}
              height={pokemon.height}
              weight={pokemon.weight}
              onAddToCart={() => agregarAlCarrito(pokemon)}
            />
          ))
        }
      </div>

      <Footer />
    </>
  );
}

export default App;