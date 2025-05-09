'use client';

import './globals.scss';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { useEffect, useState } from 'react';
import ThemeProvider from './providers/page';
import { useAuth } from '@/hooks/useAuth';
import LoadingBar from './components/LoadingBar';

export default function RootLayout({ children }) {
  const [isReady, setIsReady] = useState(false);
  const { user, loading } = useAuth();

  return (
    <html lang="en">
      <body className="body">
        <Nav user={user} />
        <ThemeProvider>
          <div className={`fouc-fix page-container ${isReady ? 'ready' : ''}`}>
            <LoadingBar />
            <main className="content-wrap">{children}</main>
          </div>
        </ThemeProvider>
        <Footer />
      </body>
    </html>
  );
}
