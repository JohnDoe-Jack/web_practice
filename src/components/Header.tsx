import { useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  return (
    <header>
      <p>現在のページのパスは{location.pathname}です。</p>
    </header>
  );
};

export default Header;
