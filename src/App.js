import './index.css'
import RoutesApp from "./routes";
import { AuthProvider } from "./contexts/AuthContext";

const App = () => {
    return(
        <div className="App">
            <AuthProvider>                
                <RoutesApp />
            </AuthProvider>
        </div>
    )
}

export default App;