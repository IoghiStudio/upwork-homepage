import './Header.scss';
import { Nav } from '../Nav';

export const Header = () => {
  return (
    <header className="header">
      <div className="header__logo"></div>

      <div className="header__nav">
        <Nav />
      </div>
    </header>
  );
}