'use client';

import React from 'react';
import './style.css';
import Link from 'next/link';

function Nav({ onProfileClick }) {
  return (
    <nav className="nav">
      <div className="left-nav">
        <Link href="/">ГЛАВНАЯ</Link>
        <Link href="/articles">СТАТЬИ</Link>
        <Link href="/about-me">ОБО МНЕ</Link>
        <Link href="/advertisement">РЕКЛАМА</Link>
      </div>
      <div className="right-nav">
        <a href="#" onClick={onProfileClick}>ПРОФИЛЬ</a>
        <Link href="login">ЛОГИН</Link>
        <input type="search" placeholder="Поиск по блогу" />
      </div>
    </nav>
  );
}

export default Nav;
