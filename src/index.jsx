import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carrito from './Presentation/Carrito/Carrito';
import ListadoRestaurantes from './Presentation/ListadoRestaurantes/ListadoRestaurantes';
import MainPage from './Presentation/MainPage/MainPage';
import Recomendaciones from './Presentation/Recomendaciones/Recomendaciones';
<<<<<<< HEAD
import Logincomensal from './Presentation/logincomensal/logincomensal';
import Loginrestaurante from './Presentation/loginrestaurante/loginrestaurante';
=======
import Seguimiento from './Presentation/Seguimiento/Seguimiento';
import Pedidos from './Presentation/Pedidos/Pedidos';
import Platos from './Presentation/Platos/Platos';
import NuevaCategoria from './Presentation/Platos/NuevaCategoria';
import NuevaPlato from './Presentation/Platos/NuevoPlato';
>>>>>>> 6e56a56c2ec699df97267d99c4e335325f4fc49d
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
        <Route path='/loginrestaurante' element={<Loginrestaurante/>}/>
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