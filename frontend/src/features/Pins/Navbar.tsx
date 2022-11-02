import React from 'react';
import { User } from '../../shared/@types/user';

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
  user: User | undefined;
};

const NavBar = ({ searchTerm, setSearchTerm, user }: Props) => {
  return <div>NavBar</div>;
};

export default NavBar;
