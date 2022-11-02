import React from 'react';

type Props = {
  searchTerm: string;
  setSearchTerm: (searchTerm: string) => void;
};

const Search = ({ searchTerm, setSearchTerm }: Props) => {
  return <div>Search</div>;
};

export default Search;
