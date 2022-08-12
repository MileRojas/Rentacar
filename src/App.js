import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import {HomePage, RentacarMenu} from './Components';

import { Movilidades, Reservas, Alquileres } from './Pages';
import './App.css';

function App() {

  return (
    <BrowserRouter>
    <RentacarMenu />
    <Routes>
      <Route path="homepage" element={<HomePage/>} />
      <Route path="reservas" element={<Reservas/>} />
      <Route path="reservas/:reservaId" element={<Reservas/>} />
      <Route path="reservas/new" element={<Reservas/>} />

      <Route path="alquileres" element={<Alquileres/>} />
      <Route path="alquileres/:alquileresId" element={<Alquileres/>}  />
      <Route path="alquileres/new" element={<Alquileres/>}  />

      <Route path="movilidades" element={<Movilidades/>} />
      <Route path="movilidades/:movilidadId" element={<Movilidades/>} />
      <Route path="movilidades/new" element={<Movilidades/>} />

      <Route path="*" element={<Navigate to="homepage" replace />} />

    </Routes>
  </BrowserRouter>
  );
}

export default App;
