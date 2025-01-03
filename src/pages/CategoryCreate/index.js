import { useState } from 'react'
import api from '../../services/api';

const CreateCategory = () => {  
  const [name, setName] = useState('')

  async function handleSubmit(e){
    e.preventDefault();

    const retorno = await api.post('category', { name });
    
    if(retorno.status === 200){
        alert('Categoria criada com sucesso!');
        setName('');
    }
    
  }

  return (
    <>
      <div>Create Category</div>
      
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder='Nome da Categoria'
          value={name}
          onChange={ (e) => setName(e.target.value) }
        />

        <button type='submit'>Criar</button>

      </form>
    </>
  )
}

export default CreateCategory