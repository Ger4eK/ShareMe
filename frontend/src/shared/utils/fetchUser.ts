export const fetchUser = () => {
  const user =
    localStorage.getItem('user') !== 'undefined'
      ? JSON.parse(localStorage.getItem('user') as string)
      : localStorage.clear();
  return user;
};
