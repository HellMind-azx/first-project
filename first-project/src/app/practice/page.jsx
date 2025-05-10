'use client';
import { useState, useEffect } from 'react';
import './style.scss';

export default function Practice() {
  const [name, setName] = useState('');
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) setName(savedName);
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      localStorage.setItem("name", name);
    }
  }, [name, isLoaded]);

  return (
    <div className='practice-page'>
      <h1>Practice</h1>
      <p>This is the practice page.</p>
      <br />
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Введите имя"
      />
      <br />
      <p>Привет, {name}</p>
    </div>
  );
}
