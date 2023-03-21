import logo from "../../assets/logo.svg";
import './header.css';

function Header(){
    return(
      <header>
        <img src={logo} alt="logo" className="logo"/>
        
      </header>
    )
  }
  
  export default Header;