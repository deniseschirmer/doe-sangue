import gota from "../../assets/gota.svg";
import "./footer.css";

function Footer() {
  return (
    <footer>
      <h4 className="titulo-footer">
        Útimos <span className="red"> doadores</span>
      </h4>
      <img src={gota} alt="gota" className="gota" />
      <img src={gota} alt="gota" className="gota" />
      <img src={gota} alt="gota" className="gota" />
      <img src={gota} alt="gota" className="gota" />
    </footer>
  );

}

export default Footer;

