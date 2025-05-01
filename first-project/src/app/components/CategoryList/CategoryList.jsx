'use client'
import './CategoryList.css'

export default function CategoryList() {
  return (
    <>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="#000000" d="M10 3H4a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1m10 10h-6a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1v-6a1 1 0 0 0-1-1M17 3c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4M7 13c-2.206 0-4 1.794-4 4s1.794 4 4 4s4-1.794 4-4s-1.794-4-4-4"/></svg>
      <p>Категории</p>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#000000" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 20V4m-7 9l7 7l7-7"/></svg>
    <div className='category-list'>
      <div className='category-list__title'>
        <h2>Категории</h2>
      </div>
      <div className='category-list__items'>
        <div className='category-list__item'>
          <h3>Web-разработка</h3>
        </div>
        <div className='category-list__item'>
          <h3>Продвижение</h3>
        </div>
        <div className='category-list__item'>
          <h3>Дизайн</h3>
        </div>
      </div>
    </div>
      </>
  )
}
