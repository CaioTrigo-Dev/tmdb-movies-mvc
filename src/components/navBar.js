import '../assets/navBar.css';

export default function NavBar(){
    return(
        <nav className="navbar-container">
            <h1>CineMark</h1>
            <div className='links'>
                <span>Home</span>
                <span>Favoritos</span>
            </div>

            <div className='userSection'>
                <span>Usuario</span>
                <button>Sair</button>
            </div>
        </nav>
    )
}