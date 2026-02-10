import { useContext } from 'react';
import '../assets/navBar.css';
import { AuthContext } from '../context/AuthContext';

export default function NavBar(){
    const {logout} = useContext(AuthContext);
    const {user} = useContext(AuthContext);
    return(
        <nav className="navbar-container">
            <h1>CineMark</h1>
            <div className='links'>
                <span>Home</span>
                <span>Favoritos</span>
            </div>

            <div className='userSection'>
                <span>{user}</span>
                <button onClick={logout}>Sair</button>
            </div>
        </nav>
    )
}