import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Fragment } from "react";
import PessoaCreate from "../pages/PessoaCreate";


const RoutesApp = () => {
    return (
        <BrowserRouter>
            {/* <Header /> */}
            <Fragment>
                <Routes>
                    <Route path="/" element={ <PessoaCreate /> }/>
                    <Route path="pessoa/create" element={ <PessoaCreate /> }/>
                    {/* <Route path="/" element={<Home />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/admin" element={<Private><Admin /></Private>}/>
                    <Route path="/category/create" element={<Private><CreateCategory /></Private>}/>
                    <Route path="/category/list" element={<Private><CategoryList /></Private>}/>
                    <Route path="/category/edit/:id" element={<Private><CategoryEdit /></Private>}/> */}
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}


export default RoutesApp;
