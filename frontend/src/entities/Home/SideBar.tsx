import { User } from '../../shared/@types/user';

type propTypes = {
  user?: User | undefined;
  closeToggle?: (val: boolean) => void;
};

const SideBar = ({ user, closeToggle }: propTypes) => {
  return <div>SideBar</div>;
};

export default SideBar;
