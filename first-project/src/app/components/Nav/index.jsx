import './style.css'
import Link from 'next/link';
function Nav() {
    return ( 
        <nav className="nav">
        <div className="left-nav">
          <Link href="/">ГЛАВНАЯ</Link>
          <Link href="/articles">СТАТЬИ</Link>
          <Link href="">ОБО МНЕ</Link>
          <Link href="">РЕКЛАМА</Link>
        </div>
        <div className="right-nav">
          <Link href="">ПРОФИЛЬ</Link>
          <input
            type="search"
            placeholder="Поиск по блогу"
          />
        </div>
      </nav>
     );
}

export default Nav;
