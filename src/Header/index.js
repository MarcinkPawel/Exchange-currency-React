import "./style.css";

const Header = ({header, subHeader}) => (
  <header className="header">
    <h1 className="header__text">{header}</h1>
    <h2 className="header__text">{subHeader}</h2>
  </header>
);

export default Header;
