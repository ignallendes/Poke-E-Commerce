import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useState } from "react";

import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import ProductCardPoke from "./components/productCardPoke/productCardPoke";
import Products from "./pages/ProductPage/Products";

import { pokedex } from "./assets/mocks/pokedex";

function App() {
  const [cart, setCart] = useState([]);

  function agregarAlCarrito(pokemon) {
    setCart((prevCart) => [...prevCart, pokemon]);
  }

  return (
    <>
      <Header cartCount={cart.length} />

      <Routes>
        <Route
          path="/"
          element={
            <div id="pokedexCoatainer">
              {pokedex[0].pokemons.map((pokemon) => (
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
              ))}
            </div>
          }
        />

        <Route path="/products" element={<Products />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;