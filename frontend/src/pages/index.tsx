import { useEffect } from 'react';
import { Routes, Route } from 'react-router';
import { fetchUser } from '../shared/utils/fetchUser';
import HomePage from './HomePage/HomePage';
import LoginPage from './LoginPage/LoginPage';
import { useNavigate } from 'react-router-dom';

export const Routing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const User = fetchUser();

    if (!User) navigate('/login');
  }, [navigate]);

  return (
    <Routes>
      <Route path='login' element={<LoginPage />} />
      <Route path='/*' element={<HomePage />} />
    </Routes>
  );
};
