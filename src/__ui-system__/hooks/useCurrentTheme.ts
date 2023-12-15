import { useContext } from 'react';

import { ThemeContext } from 'ui-system/theme';

export function useCurrentTheme() {
    const context = useContext(ThemeContext);
    
    if (context === null) {
      throw new Error('Context values could not be read. Please check if the value is \'null\'. (reading for ThemeContext)');
    }
  
    return {
      switchTheme: context?.switchTheme,
      currentTheme: context?.currentTheme,
    };
  };
  