import { useState } from "react";
import api from '../../services/api'

const PessoaCreate = () => {

    const [nome, setNome] = useState('');
    const [dtNascimento, setDtNascimento] = useState('');

    async function enviar(e){
        e.preventDefault();

        const data = {
            nome,
            dtNascimento
        }

        try{
            const retorno = await api.post('pessoa', data);
            console.log('retorno', retorno);
            
            if(retorno.status === 201){
                setDtNascimento('');
                setNome('');
                alert('Contato criado com sucesso!');
            }
        } catch(error){
            alert(error.message);
        }

    }

    return (
        <>
            <h1>Novo Contato</h1>
            <form  onSubmit={enviar} >
                <label>Nome</label>
                <input type="text"
                    value={ nome }
                    onChange={ (e) => setNome(e.target.value) }/>
                <br />

                <label>Data Nascimento</label>
                <input type="date" 
                    value={ dtNascimento }
                    onChange={ (e) => setDtNascimento(e.target.value) }/>
                <br />

                <button type="submit">Criar</button>

            </form>
        </>
    )
}

export default PessoaCreate;