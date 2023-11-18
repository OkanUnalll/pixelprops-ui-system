import type { ThemeMode } from 'ui-system/core';

const CURRENT_THEME_LS_KEY = 'user_theme';

export const setCurrentThemeModeFromLS = (mode: ThemeMode): void => {
  window.localStorage.setItem(CURRENT_THEME_LS_KEY, mode);
};

export const getCurrentThemeModeFromLS = (): ThemeMode | null => {
  const lsValue = window.localStorage.getItem(CURRENT_THEME_LS_KEY) as ThemeMode | null;

  return lsValue;
};