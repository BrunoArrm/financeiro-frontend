import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage/MainPage';
import Titulo from "../components/Titulo/Titulo";
import NovoTitulo from "../components/NovoTitulo/NovoTitulo";

const Rotas = () => (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/titulo/:id' element={ <Titulo  /> } />
        <Route path='/novoTitulo' element={ <NovoTitulo /> } />
    </Routes>
);

export default Rotas;