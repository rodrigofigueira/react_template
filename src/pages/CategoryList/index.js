import { useState, useEffect } from "react";
import api from '../../services/api';
import { useNavigate } from "react-router-dom";
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

export default function CategoryList(){
    const [categories, setCategories] = useState([]);
    const navigate = useNavigate();

    useEffect(() =>{

        async function getAllCategories(){
            const { data } = await api.get('categories');
            setCategories(data);
        }
        getAllCategories();
     }, []);

    function handleEdit(categoryId) {
        navigate(`/category/edit/${categoryId}`);
    }

    function handleDelete(categoryId) {
        confirmAlert({
            title: 'Confirmação de Exclusão',
            message: 'Você tem certeza que deseja excluir esta categoria?',
            buttons: [
              {
                label: 'Sim',
                onClick: () => executeDelete(categoryId),
              },
              {
                label: 'Não',
                onClick: () => console.log('Exclusão cancelada.'),
              },
            ],
          });
    }

    async function executeDelete(categoryId) {
        try {
          const retorno = await api.delete(`category/${categoryId}`);
          console.log(retorno);
          setCategories(categories.filter((category) => category.id !== categoryId));
          alert('Categoria excluída com sucesso!');
        } catch (error) {
          console.log('retorno 400', error);
          alert(error.response.data.message);
        }
      }

    return(
        <div>
            <h1>Lista de Categorias</h1>
            <table border="1" style={{ borderCollapse: 'collapse', width: '100%' }}>
                <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Ações</th>
                </tr>
                </thead>
                <tbody>
                {categories.map((category) => (
                    <tr key={category.id}>
                        <td>{category.id}</td>
                        <td>{category.name}</td>
                        <td>
                            <button onClick={() => handleEdit(category.id)}>Editar</button>
                            <button onClick={() => handleDelete(category.id)}>Excluir</button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            
        </div>
    )
}