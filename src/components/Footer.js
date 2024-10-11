// src/components/Footer.js
const Footer = () => {
  const email = "songlab12345@gmail.com";
  const copyrightYear = new Date().getFullYear();

  return (
    <footer>
      <p>&copy; {copyrightYear} Lab for Clinical Pharmacy and Therapeutics @ CUK. All rights reserved.</p>
      <p>Contact us: {email}</p>
    </footer>
  );
}
export default Footer;