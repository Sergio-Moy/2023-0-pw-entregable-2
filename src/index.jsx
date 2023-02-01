import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carrito from './Presentation/Carrito/Carrito';
import ListadoRestaurantes from './Presentation/ListadoRestaurantes/ListadoRestaurantes';
import MainPage from './Presentation/MainPage/MainPage';
import Recomendaciones from './Presentation/Recomendaciones/Recomendaciones';
import Logincomensal from './Presentation/logincomensal/logincomensal';
import LoginPage from './Presentation/loginrestaurante/loginpage';
import Seguimiento from './Presentation/Seguimiento/Seguimiento';
import Pedidos from './Presentation/Pedidos/Pedidos';
import Platos from './Presentation/Platos/Platos';
import NuevaCategoria from './Presentation/Platos/NuevaCategoria';
import NuevaPlato from './Presentation/Platos/NuevoPlato';
import './Style/style.css';
import BuscarPedido from './Presentation/Seguimiento/BuscarPedido';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/recomendaciones' element={<Recomendaciones/>}/>
        <Route path='/logincomensal' element={<Logincomensal/>}/>
        <Route path='/Loginpage' element={<LoginPage/>}/>
        <Route path='/listadorestaurantes' element={<ListadoRestaurantes/>}/>
        <Route path='/micarrito' element={<Carrito/>}/>
        <Route path='/seguimiento' element={<Seguimiento/>}/>
        <Route path='/Pedidos' element={<Pedidos/>}/>
        <Route path='/Platos' element={<Platos/>}/>
        <Route path='/NuevaCategoria' element={<NuevaCategoria/>}/>
        <Route path='/NuevoPlato' element={<NuevaPlato/>}/>
        <Route path='/buscar' element={<BuscarPedido/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);