import { useCallback, useEffect, useState } from 'react';
import { getHours } from 'date-fns';

export const useDarkMode = () => {
  const [isDark, setIsDark] = useState(false);

  // 重置本地存储
  const resetTheme = useCallback(() => {
    const isDarkMode = Array.from(document.documentElement.classList).includes(
      'dark',
    );

    setIsDark(isDarkMode);
  }, []);

  // 切换模式
  const toggleDarkMode = useCallback(() => {
    // 切换 tailwind darkMode
    document.documentElement.classList.toggle('dark');

    // 切换 semi design darkMode
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
    } else {
      body.setAttribute('theme-mode', 'dark');
    }

    resetTheme(); // 重置本地存储
  }, [resetTheme]);

  // 首次自动切换
  useEffect(() => {
    const isDark = Array.from(document.documentElement.classList).includes(
      'dark',
    );
    const shouldBeDark = getHours(Date.now()) >= 17;

    if (shouldBeDark && !isDark) {
      toggleDarkMode(); // 自动切换为 dark
    } else {
      resetTheme(); // 不切换，仅重置本地存储
    }
  }, [resetTheme, toggleDarkMode]);

  return { isDark, toggleDarkMode };
};
