import './Footer.css'
import newsApi from '@/shared/assets/img/news-api.svg'

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-nav">
        <a className="footer-link">Log In</a>
        <a className="footer-link">About Us</a>
        <a className="footer-link">Publishers</a>
        <a className="footer-link">Sitemap</a>
      </div>

      <div className="logo-wrapper">
        <p className="powered">Powered by</p>
        <img src={newsApi} alt=""/>
      </div>

      <span className="copy">© 2023 Besider. Inspired by Insider</span>

    </footer>
  )
}
