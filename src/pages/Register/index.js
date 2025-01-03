import { useState } from 'react'
import { Link } from 'react-router-dom'

const Register = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleRegister(e){
    e.preventDefault();

    if(!email || !password){
      alert('Email/Password obrigatórios');
      return;
    }

    alert('ok')
  }

  return (
    <>
      <div>Register</div>
      
      <form onSubmit={handleRegister}>
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

        <button type='submit'>Cadastrar</button>

        <Link to="/">Já possui uma conta? Faça o login</Link>

      </form>
    </>
  )
}

export default Register