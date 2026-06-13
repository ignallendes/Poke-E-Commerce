import pokeLogo from '../../assets/img/logo.png'
import './header.css'
import SearchBar from '../searchBar/searchBar.jsx'

function Header() {
    return (
        <header>
            <div>
                <img src={pokeLogo} className="logo" alt="Poke logo" />
                <p className="title">Pokedex de región de Kanto</p>
                
            </div>
            <SearchBar />
        </header>
    );
}
export default Header;