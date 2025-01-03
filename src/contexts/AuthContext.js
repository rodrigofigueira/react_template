import { useState, createContext } from "react"
import { LoginNaApi } from "../routes/Login"

export const AuthContext = createContext({})

export function AuthProvider({children}){
    const CHAVE_LOCALSTORAGE = "authToken";
    
    const [user, setUser] = useState(() => {
        const token = localStorage.getItem(CHAVE_LOCALSTORAGE);
        return token ? { token } : {};
    });

    async function login(email, password){

        if(!email || !password){
            alert('Email/Password obrigatórios');
            return false;
        }

        const _user = await LoginNaApi(email, password);

        if(!_user){
            alert("Email/Senha inválidos")
            return false;
        }

        persistirDadosUsuario(_user);

        return true;
    }    

    function persistirDadosUsuario(user){
        setUser(user)
        localStorage.setItem(CHAVE_LOCALSTORAGE, user.token);
    }

    function logout(){
        removerDadosUsuario();
    }

    function removerDadosUsuario(){
        localStorage.removeItem(CHAVE_LOCALSTORAGE);
        setUser({})
    }

    return(
        <AuthContext.Provider value={{ login, user, logout, CHAVE_LOCALSTORAGE }}>
            {children}
        </AuthContext.Provider>
    )
    
}

