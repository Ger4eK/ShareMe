import { User } from '../../shared/@types/user';
import { Routes, Route } from 'react-router-dom';
import NavBar from '../../features/Pins/Navbar';
import { useState } from 'react';
import Feed from '../../entities/Pins/Feed';
import PinDetail from '../../entities/Pins/PinDetail';
import CreatePin from '../../features/Pins/CreatePin';
import Search from '../../features/Pins/Search';

type propTypes = {
  user?: User | undefined;
};

const Pins = ({ user }: propTypes) => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className='px-2 md:px-5'>
      <div className='bg-gray-50'>
        <NavBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          user={user && user}
        />
      </div>
      <div className='h-full'>
        <Routes>
          <Route path='/' element={<Feed />} />
          <Route path='/category/:categoryId' element={<Feed />} />
          <Route
            path='/pin-detail/:pinId'
            element={<PinDetail user={user && user} />}
          />
          <Route
            path='/create-pin'
            element={<CreatePin user={user && user} />}
          />
          <Route
            path='/search'
            element={
              <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            }
          />
        </Routes>
      </div>
    </div>
  );
};

export default Pins;
