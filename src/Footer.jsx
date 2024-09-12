import './Footer.css'

function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <div className="footer">
      <p>© {currentYear} Created and Designed by Edgar Fong</p>
    </div>
  );
}

export default Footer;