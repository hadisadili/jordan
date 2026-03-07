'use client';

import { useState, useEffect } from 'react';

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const theme = localStorage.getItem('theme');
    const isDarkMode = theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    setIsDark(isDarkMode);
    
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newIsDark = !isDark;
    setIsDark(newIsDark);
    
    if (newIsDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  if (!mounted) {
    return (
      <div className="fixed top-8 right-8 w-12 h-6 bg-gray-300 rounded-full p-1">
        <div className="w-4 h-4 bg-white rounded-full shadow-md" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="fixed top-8 right-8 w-12 h-6 bg-gray-300 dark:bg-gray-600 rounded-full p-1 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      <div
        className={`w-4 h-4 bg-white rounded-full shadow-md transform transition-transform duration-200 ${
          isDark ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
    </button>
  );
}

