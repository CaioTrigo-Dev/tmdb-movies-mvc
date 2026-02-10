import '../../assets/login.css';
import { UseLoginController } from '../../controllers/useLoginController';

export default function Login(){
    const {userName, setUserName, password, setPassword, handleLogin, stateView} = UseLoginController(); 
    return(
        <main className='main-container'>
            <header className="header-container">
                <h1>CineMark</h1>
                <form className='form-container' onSubmit={handleLogin}>
                    <label>Login</label>
                    <input value={userName} onChange={(e)=> setUserName(e.target.value)} type='text'></input>

                    <label>Senha</label>
                    <input value={password} onChange={(e)=> setPassword(e.target.value)} type='password'></input>

                    <button type='submit'>Entrar</button>
                    <div>
                        <span>{stateView}</span>
                    </div>
                </form>
            </header>
        </main>
    )
}