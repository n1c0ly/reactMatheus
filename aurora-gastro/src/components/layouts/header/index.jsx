import logoRestaurante from './../../../images/logo-restaurante 1.svg';
import './style.css';

export const Header = () => {
    return (
        
        <header>

            <img src={logoRestaurante} alt="Logo do Restaurante" />

            <nav className='nav-header'>
                <ul>
                    <li><a href="">Home</a></li>
                    <li><a href="">Cardápio</a></li>
                    <li><a href="">Sobre nós</a></li>
                    <li><a href="">Contato</a></li>
                </ul>
            </nav>
            <nav className='container-btn-header'>
                <a href="">Reserve aqui</a>
            </nav>
        </header>
        
    )
}