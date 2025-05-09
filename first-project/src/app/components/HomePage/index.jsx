"use client";


import "./style.scss";
import Link from "next/link";

function HomePage() {
  return (
    <div className="home-page">

      <div className="img-water">
      <img 
        src="https://images.pexels.com/photos/189349/pexels-photo-189349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>
       
        <div className="details">
          <div className="img-avatae">
            <img
              className="avatar"
              src="https://img.freepik.com/premium-photo/samurai-warrior-with-sword-red-background-illustration_1308175-83700.jpg?w=740"
            />
          </div>

          <div className="info-about-me">
            <h2 className="name">Маратов Жамшид</h2>
            <h2 className="blog">блог fullstack разработчика</h2>
          </div>

        </div>

        <div className="icons">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="37"
              height="37"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.465 1.066C8.638 1.012 9.012 1 12 1c2.988 0 3.362.013 4.534.066c1.172.053 1.972.24 2.672.511c.733.277 1.398.71 1.948 1.27c.56.549.992 1.213 1.268 1.947c.272.7.458 1.5.512 2.67C22.988 8.639 23 9.013 23 12c0 2.988-.013 3.362-.066 4.535c-.053 1.17-.24 1.97-.512 2.67a5.396 5.396 0 0 1-1.268 1.949c-.55.56-1.215.992-1.948 1.268c-.7.272-1.5.458-2.67.512c-1.174.054-1.548.066-4.536.066c-2.988 0-3.362-.013-4.535-.066c-1.17-.053-1.97-.24-2.67-.512a5.397 5.397 0 0 1-1.949-1.268a5.392 5.392 0 0 1-1.269-1.948c-.271-.7-.457-1.5-.511-2.67C1.012 15.361 1 14.987 1 12c0-2.988.013-3.362.066-4.534c.053-1.172.24-1.972.511-2.672a5.396 5.396 0 0 1 1.27-1.948a5.392 5.392 0 0 1 1.947-1.269c.7-.271 1.5-.457 2.67-.511m8.98 1.98c-1.16-.053-1.508-.064-4.445-.064c-2.937 0-3.285.011-4.445.064c-1.073.049-1.655.228-2.043.379c-.513.2-.88.437-1.265.822a3.412 3.412 0 0 0-.822 1.265c-.151.388-.33.97-.379 2.043c-.053 1.16-.064 1.508-.064 4.445c0 2.937.011 3.285.064 4.445c.049 1.073.228 1.655.379 2.043c.176.477.457.91.822 1.265c.355.365.788.646 1.265.822c.388.151.97.33 2.043.379c1.16.053 1.507.064 4.445.064c2.938 0 3.285-.011 4.445-.064c1.073-.049 1.655-.228 2.043-.379c.513-.2.88-.437 1.265-.822c.365-.355.646-.788.822-1.265c.151-.388.33-.97.379-2.043c.053-1.16.064-1.508.064-4.445c0-2.937-.011-3.285-.064-4.445c-.049-1.073-.228-1.655-.379-2.043c-.2-.513-.437-.88-.822-1.265a3.413 3.413 0 0 0-1.265-.822c-.388-.151-.97-.33-2.043-.379m-5.85 12.345a3.669 3.669 0 0 0 4-5.986a3.67 3.67 0 1 0-4 5.986M8.002 8.002a5.654 5.654 0 1 1 7.996 7.996a5.654 5.654 0 0 1-7.996-7.996m10.906-.814a1.337 1.337 0 1 0-1.89-1.89a1.337 1.337 0 0 0 1.89 1.89"
                clipRule="evenodd"
              ></path>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <g fill="none">
                <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035c-.01-.004-.019-.001-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427c-.002-.01-.009-.017-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093c.012.004.023 0 .029-.008l.004-.014l-.034-.614c-.003-.012-.01-.02-.02-.022m-.715.002a.023.023 0 0 0-.027.006l-.006.014l-.034.614c0 .012.007.02.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"></path>
                <path
                  fill="currentColor"
                  d="M17 3a4 4 0 0 1 3.995 3.8L21 7v10a4 4 0 0 1-3.8 3.995L17 21H7a4 4 0 0 1-3.995-3.8L3 17V7a4 4 0 0 1 3.8-3.995L7 3zm0 2H7a2 2 0 0 0-1.995 1.85L5 7v10a2 2 0 0 0 1.85 1.995L7 19h10a2 2 0 0 0 1.995-1.85L19 17V7a2 2 0 0 0-1.85-1.995zm-1.547 4.225l.215-.28a1 1 0 0 1 1.664 1.11a9.803 9.803 0 0 1-1.466 1.68a9.429 9.429 0 0 1-.44.382c1.098.584 1.99 1.48 2.468 2.436a1 1 0 1 1-1.788.894c-.457-.912-1.64-1.804-2.896-1.987l-.21-.023V15a1 1 0 0 1-1 1c-3.49 0-6-2.868-6-6.5a1 1 0 1 1 2 0c0 1.874.978 3.699 2.795 4.31l.205.063V9.5c0-.569.458-.969 1-1a1 1 0 0 1 .974.77l.02.113l.007 1.9c.496-.206 1.005-.553 1.508-1.018c.348-.32.654-.672.944-1.04"
                ></path>
              </g>
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M15.022 3.343c.508-.087 1.077-.116 1.613-.025a4.85 4.85 0 0 1 2.54 1.273c.456.01.905-.08 1.302-.208a5.36 5.36 0 0 0 1.098-.501l.009-.006a.75.75 0 0 1 1.042 1.037c-.207.315-.496.877-.819 1.507l-.155.301c-.185.36-.375.724-.552 1.036c-.111.196-.23.395-.35.567v.274A12.34 12.34 0 0 1 8.287 21.03a12.32 12.32 0 0 1-6.694-1.97a.75.75 0 0 1 .5-1.375a7.471 7.471 0 0 0 4.033-.642a4.858 4.858 0 0 1-2.61-2.922a.75.75 0 0 1 .147-.722l.01-.01A4.848 4.848 0 0 1 2.05 9.793v-.052a.75.75 0 0 1 .553-.724A4.84 4.84 0 0 1 2.09 6.84a4.9 4.9 0 0 1 .65-2.442a.75.75 0 0 1 1.232-.1a10.89 10.89 0 0 0 7.006 3.93a4.85 4.85 0 0 1 2.562-4.406c.402-.214.934-.385 1.482-.479m-11.28 7.548a3.35 3.35 0 0 0 2.503 2.164a.75.75 0 0 1 .072 1.453c-.272.083-.551.14-.834.173a3.358 3.358 0 0 0 2.59 1.3a.75.75 0 0 1 .45 1.339a8.97 8.97 0 0 1-3.548 1.695a10.82 10.82 0 0 0 3.313.515h.009A10.838 10.838 0 0 0 19.25 8.607v-.535a.75.75 0 0 1 .186-.495c.07-.079.19-.261.36-.56c.16-.282.338-.622.523-.981l.033-.066a4.992 4.992 0 0 1-1.593.097a.75.75 0 0 1-.47-.237a3.35 3.35 0 0 0-1.904-1.032a3.42 3.42 0 0 0-1.11.025a3.605 3.605 0 0 0-1.028.323a3.35 3.35 0 0 0-1.678 3.74a.75.75 0 0 1-.767.925a12.39 12.39 0 0 1-8.149-3.627a3.41 3.41 0 0 0-.063.657v.002a3.34 3.34 0 0 0 1.486 2.785A.75.75 0 0 1 4.64 11a4.798 4.798 0 0 1-.897-.11"
                clipRule="evenodd"
              ></path>
            </svg>

          </div>

          <div className="text">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
              ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea
            </p>
          </div>
          <div className="buttons">
            <button className="write-to-me">
              Написать мне
            </button>
            <button className="look-works">Посмотреть работы</button>
          </div>

      <div className="blog-contents">
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
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 1024 1024"><path fill="#59c7f9" d="M864 248H728l-32.4-90.8a32.07 32.07 0 0 0-30.2-21.2H358.6c-13.5 0-25.6 8.5-30.1 21.2L296 248H160c-44.2 0-80 35.8-80 80v456c0 44.2 35.8 80 80 80h704c44.2 0 80-35.8 80-80V328c0-44.2-35.8-80-80-80m8 536c0 4.4-3.6 8-8 8H160c-4.4 0-8-3.6-8-8V328c0-4.4 3.6-8 8-8h186.7l17.1-47.8l22.9-64.2h250.5l22.9 64.2l17.1 47.8H864c4.4 0 8 3.6 8 8zM512 384c-88.4 0-160 71.6-160 160s71.6 160 160 160s160-71.6 160-160s-71.6-160-160-160m0 256c-53 0-96-43-96-96s43-96 96-96s96 43 96 96s-43 96-96 96" /></svg>
              <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path fill="none" stroke="#59c7f9" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.912 12H4L2.023 4.135A.662.662 0 0 1 2 3.995c-.022-.721.772-1.221 1.46-.891L22 12L3.46 20.896c-.68.327-1.464-.159-1.46-.867a.66.66 0 0 1 .033-.186L3.5 15" /></svg>
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
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-width="2" d="m15 6l-6 6l6 6" /></svg>
            </div>
            <div className='page-1'><span>1</span></div>
            <div className='page-2'><span>2</span></div>
            <div className='page-3'><span>3</span></div>
            <div className='next'>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="none" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m9 6l6 6l-6 6" /></svg>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
export default HomePage;
