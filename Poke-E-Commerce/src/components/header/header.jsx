import pokeLogo from '../../assets/img/logo.png'
import './header.css'

function Header() {
    return (
        <header>
            <div>
                <img src={pokeLogo} className="logo" alt="Poke logo" />
                <p className="title">Está página web tiene como propósito poder mostrar información sobre los Pokémon alojados en un archivo local y en un futuro servir como E-commerce.</p>
            </div>
        </header>
    );
}
export default Header;