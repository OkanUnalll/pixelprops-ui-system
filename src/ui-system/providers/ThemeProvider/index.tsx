'use client';

import EmotionRootStyleRegistry from '@/libs/EmotionRootStyleRegistry';

import { createContext, useCallback, useMemo, useState, useEffect } from 'react';
import { ThemeProvider as EmotionThemeProvider, Global } from '@emotion/react';

import {
  /* THEMES */
  darkTheme,
  lightTheme,
  appleTheme,
} from 'ui-system/theme';

import type {
  ThemeMode,
  ThemeProperties,
} from 'ui-system/theme';

import { globals } from 'ui-system/core';

import * as themeProviderHelpers from './ThemeProvider.helpers';

/**
 * It is the default theme in the application.
 * This theme will be shown by default on first launch or when any theme is corrupted.
 */
const DEFAULT_THEME: ThemeProperties = darkTheme;
/* You must enter all existing themes in this section. Otherwise the theme will not appear. */
const THEMES: ThemeProperties[] = [darkTheme, lightTheme, appleTheme];

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
  const [currentTheme, setCurrentTheme] = useState<ThemeProperties>(DEFAULT_THEME);

  /* CONTROLLERS */
  const findTheme = (mode: ThemeMode): ThemeProperties => {
    const themes: ThemeProperties[] = THEMES;

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
      findTheme(themeProviderHelpers.getCurrentThemeModeFromLS() ?? DEFAULT_THEME.mode)
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