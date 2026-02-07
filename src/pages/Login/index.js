import '../../assets/login.css';
export default function Login(){
    return(
        <main className='main-container'>
            <header className="header-container">
                <h1>CineMark</h1>
                <form className='form-container'>
                    <label>Login</label>
                    <input type='text'></input>

                    <label>Senha</label>
                    <input type='password'></input>

                    <button type='submit'>Entrar</button>
                </form>
            </header>
        </main>
    )
}