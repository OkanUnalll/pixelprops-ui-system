export type Library = 'GOOGLE_FONT_ICONS' | 'METERIAL_UI_ICONS'

export type GoogleFontIcons = 'google_font_icons_search' | 'google_font_icons_close' | 'google_font_icons_check'
export type MeterialUIIcons = 'bar' | 'menu' | 'check'

interface IIcon {
    name: GoogleFontIcons | MeterialUIIcons;
    path: string;
  }

export const icons: IIcon[] = [
  {
    name: 'google_font_icons_search',
    path: '/icons/google-font-icon/search.svg',
  },
  {
    name: 'google_font_icons_close',
    path: '/icons/google-font-icon/close.svg',
  },
  {
    name: 'google_font_icons_check',
    path: '/icons/google-font-icon/check.svg',
  },
];