'use client'

import React, {useState} from 'react'
import './style.css'
import Nav from '../Nav'
import Profile from '../Profile'
import Link from 'next/link'

function Right() {
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const openModal = () => setIsProfileOpen(true);
  const closeModal = () => setIsProfileOpen(false);

  return(
    <div className="right">
      <Nav onProfileClick={() => setIsProfileOpen(true)} />
      <main className='container'>
      <div className='imgBox'>
      <div className='image'>
      <img src='https://img.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_23-2151499084.jpg?t=st=1744705852~exp=1744709452~hmac=e13264317e06f0cb38bd9d52651c6fb9b57ad72812082b9b078877e279fe6155&w=740' />
      </div>
      <div className='image'>
        <img src='https://img.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_23-2151499092.jpg?t=st=1744705886~exp=1744709486~hmac=ab322e2dcf6cf4f556172371e0e9c72a91bb2d22c26b64e459c961d8101c3a2c&w=740' />
      </div>
      <div className='image'>
        <img src='https://img.freepik.com/free-photo/anime-style-portrait-traditional-japanese-samurai-character_23-2151499088.jpg?t=st=1744705930~exp=1744709530~hmac=5a3a6177674ec854737ba35622c73556ee03db5a39eff7b3e3123af5adaa063a&w=740' />
      </div>
      <div className='image'>
        <img src='https://img.freepik.com/free-photo/back-view-ninja-wearing-equipment_23-2150961086.jpg?ga=GA1.1.1730196732.1738823166&semt=ais_hybrid&w=740' />
      </div>
      </div>
        <div className='input'>
        <input 
          type='text'
          placeholder='Напишите что-нибудь'
          />
          <div className='icons'>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="#59c7f9" d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80m8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8l22.9-64.2h250.5l22.9 64.2l17.1 47.8H864c4.4 0 8 3.6 8 8zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160m0 256c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96"/></svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#59c7f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15"/></svg>
          </div>
        </div>

        <div className='text'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
        </p>
          <p className='text-left-p'>15.04.2025</p>
        </div>

        <section className='article-container'>
          <img 
            src='https://i.pinimg.com/originals/77/8d/ca/778dca34843c1e7be89e2214dc418e7a.jpg'
            />
          <div className='article-box'>
            <h1>Как писать код как безумец ?</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            </p>
              <div className='read'>
              <p>21.09.2022</p>
                <ul>
                  <li>Создание сайтов</li>
                </ul>
                <Link href='/blogs/web-developing'>Читать</Link>
              </div>
          </div>
        </section>
        <section className='article-container'>
          <img 
            src='https://sun9-16.userapi.com/impg/R7bip-I8mpKnrCd8b9x74Yit1AqehFEqSoDXtg/PUwUf0Z_S-g.jpg?size=1280x667&quality=96&sign=babd09ec35c02b67b6496118041678f7&type=album'
            />
          <div className='article-box'>
            <h1>Подробно здесь можете узнать о продвижении</h1>
            
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
            
            </p>
              <div className='read'>
              <p>21.09.2022</p>
                <ul>
                  
                  <li>Интернет-магазин</li>
                </ul>
                <Link href='/blogs/video-marketing'>Читать</Link>
              </div>
          </div>
        </section>
        <section className='article-container'>
          <img 
            src='https://www.pptssolutions.com/wp-content/uploads/2023/04/digital-marketing2-50.jpg'
            />
          <div className='article-box'>
            <h1>Блог о маркетинге</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex.</p>
              <div className='read'>
              <p>13.11.2021</p>
                <ul>
                  <li>Продвижение видео</li>
                </ul>
                <Link href='/blogs/digital-marketing'>Читать</Link>
              </div>
          </div>
        </section>

        <section className='pages'>
        <div className='previous'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-width="2" d="m15 6l-6 6l6 6"/></svg>
        </div>
        <div className='page-1'><span>1</span></div>
        <div className='page-2'><span>2</span></div>
        <div className='page-3'><span>3</span></div>
        <div className='next'>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6"/></svg>
        </div>
        </section>
      </main>
       {isProfileOpen && <Profile onClose={closeModal} />}
    </div>
  )
}
export default Right