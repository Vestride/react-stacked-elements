import React, { useState, useEffect } from 'react';

import StackedElements from '../../';

import styles from './mode-switcher.module.css';

const query = typeof window === 'undefined' ? null : window.matchMedia('(prefers-color-scheme: dark)');
const storedPreference = typeof localStorage === 'undefined' ? null : localStorage.getItem('color-scheme');

export const ModeSwitcher: React.FunctionComponent = () => {
  const initialState = storedPreference ? storedPreference === 'dark' : query ? query.matches : false;
  const [isDarkMode, setIsDarkMode] = useState(initialState);

  // Rerender when the system changes its preferences.
  useEffect(() => {
    if (!query) return;
    const onQueryChange = (mediaQueryList: MediaQueryListEvent) => {
      setIsDarkMode(mediaQueryList.matches);
    };
    query.addListener(onQueryChange);

    return () => {
      query.removeListener(onQueryChange);
    };
  }, []);

  useEffect(() => {
    const theme = isDarkMode ? 'dark' : 'light';
    try {
      localStorage.setItem('color-scheme', theme);
    } catch {
      console.log('Failed to write to local storage');
    }
    document.documentElement.classList.remove('dark', 'light');
    document.documentElement.classList.add(theme);
  }, [isDarkMode]);

  return (
    <label className={styles.label}>
      <StackedElements selectedIndex={isDarkMode ? 0 : 1}>
        <button
          title="You are using the dark theme. Click to switch to light."
          className={styles.button}
          onClick={() => setIsDarkMode(false)}
        >
          <span role="img" aria-label="moon">
            🌔
          </span>
        </button>
        <button
          title="You are using the light theme. Click to switch to dark."
          className={styles.button}
          onClick={() => setIsDarkMode(true)}
        >
          <span role="img" aria-label="sun">
            ☀️
          </span>
        </button>
      </StackedElements>
    </label>
  );
};
