import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../pages/dashboard/Dashboard';
import Estoques from '../pages/estoques/Estoques';
import Produtos from '../pages/produtos/Produtos';

export const AppRoutes = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/estoques" element={<Estoques />} />

        <Route path="/produtos" element={<Produtos />} />

        <Route path="*" element={<Navigate to="/dashboard" />} />
      </Routes>
    </BrowserRouter>
  );
};
