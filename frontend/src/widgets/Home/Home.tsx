import { useState, useRef, useEffect } from 'react';
import { HiMenu } from 'react-icons/hi';
import { AiFillCloseCircle } from 'react-icons/ai';
import SideBar from '../../entities/Home/SideBar';
import { Link, Route, Routes, useNavigate } from 'react-router-dom';
import logo from '../../shared/assets/logo.png';
import { client } from '../../processes/client';
import { userQuery } from '../../shared/api/userQuery';
import { User } from '../../shared/@types/user';
import Pins from '../Pins/Pins';
import UserProfile from '../../entities/Home/UserProfile';

const Home = () => {
  const navigate = useNavigate();
  const [toggleSidebar, setToggleSidebar] = useState(false);
  const [user, setUser] = useState<User>();
  const scrollRef = useRef<HTMLDivElement>(null);

  const userInfo =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') || '')
      : navigate('/', { replace: true });

  useEffect(() => {
    const query = userQuery(userInfo?.googleId);

    client.fetch(query).then((data) => {
      setUser(data[0]);
    });
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo(0, 0);
  });

  return (
    <div className='flex bg-gray-50 md:flex-row flex-col h-screen transition-height duration-75 ease-out'>
      <div className='hidden md:flex h-screen flex-initial'>
        <SideBar />
      </div>
      <div className='flex md:hidden flex-row'>
        <div className='p-2 w-full flex flex-row justify-between items-center shadow-md'>
          <HiMenu
            fontSize={40}
            className='cursor-pointer'
            onClick={() => setToggleSidebar(true)}
          />
          <Link to='/'>
            <img src={logo} alt='logo' className='w-28' />
          </Link>
          <Link to={`user-profile/${user?._id}`}>
            <img
              src={user?.image}
              alt='user-pic'
              className='w-9 h-9 rounded-full '
            />
          </Link>
        </div>
      </div>
      {toggleSidebar && (
        <div className='fixed w-4/5 bg-white h-screen overflow-y-auto shadow-md z-10 animate-slide-in'>
          <div className='absolute w-full flex justify-end items-center p-2'>
            <AiFillCloseCircle
              fontSize={30}
              className='cursor-pointer'
              onClick={() => setToggleSidebar(false)}
            />
          </div>
          <SideBar closeToggle={setToggleSidebar} user={user && user} />
        </div>
      )}
      <div
        className='pb-2 flex-1 h-screen overflow-y-scroll'
        onClick={() => setToggleSidebar(false)}
        ref={scrollRef}
      >
        <Routes>
          <Route path='/user-profile/:userId' element={<UserProfile />} />
          <Route path='/*' element={<Pins user={user && user} />} />
        </Routes>
      </div>
    </div>
  );
};

export default Home;
