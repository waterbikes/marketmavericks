import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <p>Made with 💗 by HelpuiT &copy; {new Date().getFullYear()}</p>
    </footer>
  );
};

export default Footer;
