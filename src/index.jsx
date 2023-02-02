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
import Estados from './Presentation/estados/estados';
import Pedidoregistro from './Presentation/Registrarpedido/pedidoregistro';
import Registrarentrega from './Presentation/registrarentrega/registrarentrega';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/2023-0-pw-entregable-2/' element={<MainPage/>}/>
        <Route path='/2023-0-pw-entregable-2/recomendaciones' element={<Recomendaciones/>}/>
        <Route path='/2023-0-pw-entregable-2/logincomensal' element={<Logincomensal/>}/>
        <Route path='/2023-0-pw-entregable-2/Loginpage' element={<LoginPage/>}/>
        <Route path='/2023-0-pw-entregable-2/listadorestaurantes' element={<ListadoRestaurantes/>}/>
        <Route path='/2023-0-pw-entregable-2/micarrito' element={<Carrito/>}/>
        <Route path='/2023-0-pw-entregable-2/seguimiento' element={<Seguimiento/>}/>
        <Route path='/2023-0-pw-entregable-2/pedidoregistro' element={<Pedidoregistro/>}/>
        <Route path='/2023-0-pw-entregable-2/registrarentrega' element={<Registrarentrega/>}/>
        <Route path='/2023-0-pw-entregable-2/Pedidos' element={<Pedidos/>}/>
        <Route path='/2023-0-pw-entregable-2/Platos' element={<Platos/>}/>
        <Route path='/2023-0-pw-entregable-2/NuevaCategoria' element={<NuevaCategoria/>}/>
        <Route path='/2023-0-pw-entregable-2/NuevoPlato' element={<NuevaPlato/>}/>
        <Route path='/2023-0-pw-entregable-2/buscar' element={<BuscarPedido/>}/>
        <Route path='/2023-0-pw-entregable-2/estados' element={<Estados/>}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);