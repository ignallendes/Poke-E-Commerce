import pokeLogo from '../../assets/img/logo.png'
import './header.css'
import SearchBar from '../searchBar/searchBar.jsx'
import Button from '../button/button.jsx'

function Header(props) {
    return (
        <header>
            <div>
                <img src={pokeLogo} className="logo" alt="Poke logo" />
                <p className="title">Pokedex de región de Kanto</p> 
            </div>
            <SearchBar />
            <Button
                icon="🛒 "
                text= {`Carrito ${props.cartCount}`}
            />
        </header>
    );
}
export default Header;