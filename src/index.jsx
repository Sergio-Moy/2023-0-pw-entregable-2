import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Carrito from './Presentation/Carrito/Carrito';
import ListadoRestaurantes from './Presentation/ListadoRestaurantes/ListadoRestaurantes';
import MainPage from './Presentation/MainPage/MainPage';
import Recomendaciones from './Presentation/Recomendaciones/Recomendaciones';
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
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
