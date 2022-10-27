import { Routes, Route } from 'react-router';
import HomePage from './HomePage';
import LoginPage from './LoginPage';

export const Routing = () => {
  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='/*' element={<HomePage />} />
    </Routes>
  );
};
