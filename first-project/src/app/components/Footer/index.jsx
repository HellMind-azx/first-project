// components/Footer.jsx
import Link from "next/link";
import { FaTelegramPlane, FaInstagram, FaLinkedin } from "react-icons/fa";
import "./style.scss";

export default function Footer() {
  return (
    <footer className="footer">
      {/* Волна сверху */}
      <div className="footer__wave">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.74,22,103.34,29.52,158,22.6..."></path>
        </svg>
      </div>

      {/* Контент */}
      <div className="footer__content">
        {/* Лого и описание */}
        <div className="footer__column">
          <h2 className="footer__logo">MyCompany</h2>
          <p className="footer__text">
            Премиальные цифровые решения для бизнеса с упором на стиль и надёжность.
          </p>
        </div>

        {/* Навигация */}
        <div className="footer__column">
          <h3 className="footer__title">Навигация</h3>
          <ul>
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/services">Услуги</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
          </ul>
        </div>

        {/* Контакты */}
        <div className="footer__column">
          <h3 className="footer__title">Контакты</h3>
          <ul>
            <li>o@mycompany.com</li>
            <li> +7 (900) 000-00-00</li>
            <li> Москва, ул. Примерная, 1</li>
          </ul>
        </div>

        {/* Соцсети */}
        <div className="footer__column">
          <h3 className="footer__title">Мы в соцсетях</h3>
          <div className="footer__socials">
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTelegramPlane /></a>
            <a href="#"><FaLinkedin /></a>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        © {new Date().getFullYear()} MyCompany. Все права защищены.
      </div>
    </footer>
  );
}
