import { useState, useContext } from 'react'
import { AuthContext } from '../../contexts/AuthContext'
import { Link, useNavigate } from 'react-router-dom'

const Home = () => {
  const { login } = useContext(AuthContext)
  const [email, setEmail] = useState('maria@email.com')
  const [password, setPassword] = useState('teste123')

  const navigate = useNavigate();

  async function handleSubmit(e){
    e.preventDefault();

    const logou = await login(email, password);

    if(logou){
      navigate('/admin', { replace: true })
      return;
    }
    
  }

  return (
    <>
      <div>Home</div>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Digite seu email'
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
        />

        <input 
          type="password"
          placeholder='******'
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
        />

        <button type='submit'>Acessar</button>

        <Link to="/register">Não possui uma conta? Cadastre-se</Link>

      </form>
    </>
  )
}

export default Home