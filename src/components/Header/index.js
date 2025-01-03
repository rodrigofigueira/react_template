import { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthContext';
import { Link, useNavigate  } from 'react-router-dom';

function Header(){

    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    function handleLogout(e) {
        e.preventDefault();
        logout();
        navigate('/');
      }

    return(        
        <header>
            {user?.token && (
                <>
                    <Link to="/register">Register</Link>
                    <Link to="/admin">Admin</Link>                                         
                    <Link to="/category/create">Categoria</Link>     
                    <Link to="/category/list">Todas Categorias</Link>     
                    <Link to="/" onClick={handleLogout}>
                        Sair
                    </Link>
                </>
            )}                        
        </header>
    )
}

export default Header;