'use client';

import EmotionRootStyleRegistry from '@/libs/EmotionRootStyleRegistry';

import { createContext, useCallback, useMemo, useState, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';

import { themeConfig } from '../config';

import type {
  ThemeMode,
  ThemeProperties,
} from 'ui-system/theme';

import { globals } from 'ui-system/theme';

import * as themeProviderHelpers from './ThemeProvider.helpers';

type SwitchTheme = (mode: ThemeMode) => void;

interface IThemeContext {
  switchTheme: SwitchTheme;
  currentTheme: ThemeProperties;
};

export const ThemeContext = createContext<IThemeContext | null>(null);

interface Props {
  readonly children: React.ReactNode;
};

export function ThemeProvider({ children }: Props) {
  const [currentTheme, setCurrentTheme] = useState<ThemeProperties>(themeConfig.DEFAULT_THEME);

  /* CONTROLLERS */
  const findTheme = (mode: ThemeMode): ThemeProperties => {
    const themes: ThemeProperties[] = themeConfig.THEMES;

    const theme: ThemeProperties = themes.find((theme) => theme.mode === mode) as ThemeProperties;

    return theme;
  };

  const switchTheme = useCallback((mode: ThemeMode): void => {
    const theme: ThemeProperties = findTheme(mode);

    themeProviderHelpers.setCurrentThemeModeFromLS(theme.mode);
    setCurrentTheme(theme);
  }, []);
  /* END - CONTROLLERS */

  const values: IThemeContext = useMemo(() => ({
    switchTheme,
    currentTheme,
  }), [switchTheme, currentTheme]);

  useEffect(() => {
    setCurrentTheme(
      findTheme(themeProviderHelpers.getCurrentThemeModeFromLS() ?? themeConfig.DEFAULT_THEME.mode)
    );
  }, []);

  return (
    <EmotionRootStyleRegistry>
      <ThemeContext.Provider value={values}>
        <EmotionThemeProvider theme={currentTheme}>
          <Global styles={globals(currentTheme)} />
          {children}
        </EmotionThemeProvider>
      </ThemeContext.Provider>
    </EmotionRootStyleRegistry>
  );
}