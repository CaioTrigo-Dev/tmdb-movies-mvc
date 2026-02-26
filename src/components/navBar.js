import { useContext } from 'react';
import '../assets/navBar.css';
import { AuthContext } from '../context/AuthContext';
import { Link } from 'react-router-dom';

export default function NavBar(){
    const {logout} = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    return(
        <nav className="navbar-container">
            <h1>CineMark</h1>
            <div className='nav-container-item'>
                <Link to="/dashboard" className='nav-item'>
                    <span>Home</span>
                </Link>
                <Link to="/favorites" className='nav-item'>
                    <span>Favoritos</span>
                </Link>
            </div>

            <div className='userSection'>
                <span>{user}</span>
                <button className='btn-logout' onClick={logout}>Sair</button>
            </div>
        </nav>
    )
}