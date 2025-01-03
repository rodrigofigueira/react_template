import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from '../pages/Home';
import Register from '../pages/Register'
import Admin from "../pages/Admin";
import CreateCategory from '../pages/CategoryCreate'
import CategoryList from '../pages/CategoryList'
import CategoryEdit from "../pages/CategoryEdit";
import Header from "../components/Header";
import Private from '../routes/Private'
import { Fragment } from "react";


const RoutesApp = () => {
    return (
        <BrowserRouter>
            <Header />
            <Fragment>
                <Routes>
                    <Route path="/" element={<Home />}/>
                    <Route path="/register" element={<Register />}/>
                    <Route path="/admin" element={<Private><Admin /></Private>}/>
                    <Route path="/category/create" element={<Private><CreateCategory /></Private>}/>
                    <Route path="/category/list" element={<Private><CategoryList /></Private>}/>
                    <Route path="/category/edit/:id" element={<Private><CategoryEdit /></Private>}/>
                </Routes>
            </Fragment>
        </BrowserRouter>
    );
}


export default RoutesApp;
