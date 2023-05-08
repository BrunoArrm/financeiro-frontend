import { Routes, Route } from "react-router-dom";
import MainPage from '../pages/MainPage/MainPage';
import Titulo from "../components/Titulo/Titulo";

const Rotas = () => (
    <Routes>
        <Route path='/' element={ <MainPage /> } />
        <Route path='/titulo/:id' element={ <Titulo  /> } />
    </Routes>
);

export default Rotas;