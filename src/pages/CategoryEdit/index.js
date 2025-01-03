import { useParams } from "react-router-dom"
import { useState, useEffect } from "react";
import api from '../../services/api';

export default function CategoryEdit() {
    const { id } = useParams();
    const [ name, setName ] = useState('');

    useEffect(() => {
        
        async function getCategoryFromAPI(){
            const { data } = await api.get(`/categories/${id}`);
            setName(data.name);
        }

        getCategoryFromAPI();
    }, [id]);

    async function handleSubmit(e){
        e.preventDefault();

        const retorno = await api.put('/category', { id, name });
        
        if(retorno.status !== 204){
            alert('Ocorreu um erro durante a atualização')
            return;
        }

        alert('Atualizado com sucesso');

    }

    return(
        <>
        <div>Editar Categoria</div>
        
        <form onSubmit={handleSubmit}>
          <input 
            type="text"
            placeholder='Nome da Categoria'
            value={name}
            onChange={ (e) => setName(e.target.value) }
          />
  
          <button type='submit'>Editar</button>
  
        </form>
      </>
    )
}