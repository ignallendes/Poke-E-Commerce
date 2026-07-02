import pokeLogo from "../../assets/img/logo.png";
import "./header.css";
import SearchBar from "../searchBar/searchBar";
import Button from "../button/button";
import { useNavigate } from "react-router-dom";

function Header(props) {
  const navigate = useNavigate();

  return (
    <header>
      <div>
        <img src={pokeLogo} className="logo" alt="Poke logo" />
        <p className="title">Pokedex de región de Kanto</p>
      </div>

      <SearchBar />

      <Button
        icon="📦"
        text="Productos"
        onClick={() => navigate("/products")}
      />

      <Button
        icon="🛒"
        text={`Carrito ${props.cartCount}`}
      />
    </header>
  );
}

export default Header;