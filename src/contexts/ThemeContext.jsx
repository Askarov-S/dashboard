import { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext();

// Custom hook to use theme context
const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
};

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(() => {
    // Get theme from localStorage or default to 'light'
    try {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme || 'light';
    } catch (error) {
      console.warn('localStorage not available:', error);
      return 'light';
    }
  });

  useEffect(() => {
    // Update localStorage and DOM when theme changes
    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.warn('Failed to save theme to localStorage:', error);
    }
    
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export { ThemeProvider, useTheme };
