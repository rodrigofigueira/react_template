import axios from 'axios';

export async function LoginNaApi(email, password) {
  try {
    const response = await axios.post('http://localhost:3333/session', { email, password });    
    if (response.status === 200) {
      return response.data;
    }

  } catch (error) {
    console.error('Erro ao fazer login:', error);
    return null;
  }
}