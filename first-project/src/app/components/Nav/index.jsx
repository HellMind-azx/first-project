'use client'

import React, { useState } from 'react';
import Link from 'next/link'
import './style.css'; // Импортируем стили для навигации


function Nav({ onProfileClick }) {
  const [isOpen, setIsOpen] = useState(false); // Состояние для открытия/закрытия меню
  const [showSearch, setShowSearch] = useState(false); // Для отображения инпута поиска

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <nav className="nav">
        <div className="nav-left">
          <Link href="/">Главная</Link>
          <Link href="/about">О нас</Link>
          <Link href="/contact">Контакты</Link>
        </div>
        <div className="nav-right">
          <button onClick={toggleMenu} className="burger-icon">
            {isOpen ? '✖' : '☰'}
          </button>
        </div>
      </nav>

      {/* Мобильное бургер-меню */}
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <div className="sidebar-content">
          {/* Поиск */}
          {showSearch && (
            <input
              type="text"
              placeholder="Поиск..."
              className="sidebar-search"
            />
          )}
          <ul className="sidebar-links">
            <li><Link href="/">Главная</Link></li>
            <li><Link href="/about">О нас</Link></li>
            <li><Link href="/contact">Контакты</Link></li>
            <li><button onClick={onProfileClick}>Профиль</button></li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default Nav;
