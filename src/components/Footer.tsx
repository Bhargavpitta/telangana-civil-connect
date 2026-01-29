import "../styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <a href="#">Terms and Conditions</a> |
        <a href="#"> Privacy Policy</a> |
        <a href="#"> Hyperlinking Policy</a> |
        <a href="#"> Copyright Policy</a> |
        <a href="#"> Feedback</a> |
        <a href="#"> Help</a>
      </div>

      <div className="footer-middle">
        Content on this website is published and managed by Civil Supplies Department, H.O - Telangana.
      </div>

      <div className="footer-bottom">
        COPYRIGHT ©2018 Civil Supplies Department
      </div>
    </footer>
  );
};

export default Footer;
