import { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';

/*
IMPLEMENTAR CONTROLE DE ROTAS COM ESSE COMPONENTE E REMOVER O PRIVATE
A ORGANIZAÇÃO COM ESSE COMPONENTE FICARÁ MAIS SIMPLES
*/
export default function RouteWrapper({ isPrivate }) {
    const { user } = useContext(AuthContext);

    const signed = !!user; // Verifica se o usuário está autenticado.

    // Rota pública acessada por usuário autenticado
    if (signed && !isPrivate) {
        return <Navigate to="/home" />;
    }

    // Rota privada acessada por usuário não autenticado
    if (!signed && isPrivate) {
        return <Navigate to="/" />;
    }

    // Caso autorizado, renderiza os filhos (subcomponentes da rota)
    return <Outlet />;
}
