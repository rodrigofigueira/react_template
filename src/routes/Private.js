import { useState, useEffect } from 'react'
import { Navigate } from 'react-router-dom'

export default function Private({ children }){
  const [loading, setLoading] = useState(true);
  const [signed, setSigned] = useState(false);

  useEffect(() => {
    function checkToken() {
        const token = localStorage.getItem('authToken'); // Obter o token do armazenamento local
  
        if (token) {
          setSigned(true); // Usuário autenticado
        } else {
          setSigned(false); // Não autenticado
        }
  
        setLoading(false); // Fim do carregamento
      }
  
      checkToken();
  }, [])

  if(loading){
    return(
      <div></div>
    )
  }

  if(!signed){
    return <Navigate to="/"/>
  }

  return children;
}