import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carrito from './Presentation/Carrito/Carrito';
import ListadoRestaurantes from './Presentation/ListadoRestaurantes/ListadoRestaurantes';
import MainPage from './Presentation/MainPage/MainPage';
import Recomendaciones from './Presentation/Recomendaciones/Recomendaciones';
import Seguimiento from './Presentation/Seguimiento/Seguimiento';
import Pedidos from './Presentation/Pedidos/Pedidos'
import './Style/style.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/recomendaciones' element={<Recomendaciones/>}/>
        <Route path='/listadorestaurantes' element={<ListadoRestaurantes/>}/>
        <Route path='/micarrito' element={<Carrito/>}/>
        <Route path='/seguimiento' element={<Seguimiento/>}/>
        <Route path='/Pedidos' element={<Pedidos/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
