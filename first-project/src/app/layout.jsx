
'use client';

import "./globals.css";


export default function RootLayout({ children }) {

  
  return (
    <html lang="en">
      <body
        className={'body'}
      >
        {children}
      
        <footer>
          <p>© 2025 Все права защищены</p>
        </footer>
      </body>
    </html>
  );
}
