export type GoogleFontIcons = 'google_search'
  | 'google_close'
  | 'google_check'
  | 'google_arrow_right'
  | 'google_arrow_bottom'
  | 'google_arrow_left'
  | 'google_arrow_top'
  | 'google_menu';

export type MeterialUIIcons = 'bar' | 'menu' | 'check'

interface IIcon {
  name: GoogleFontIcons | MeterialUIIcons;
  path: string;
}

export const icons: IIcon[] = [
  {
    name: 'google_search',
    path: '/icons/google-font-icon/search.svg',
  },
  {
    name: 'google_close',
    path: '/icons/google-font-icon/close.svg',
  },
  {
    name: 'google_check',
    path: '/icons/google-font-icon/check.svg',
  },
  {
    name: 'google_arrow_right',
    path: '/icons/google-font-icon/arrow-right.svg',
  },
  {
    name: 'google_arrow_bottom',
    path: '/icons/google-font-icon/arrow-bottom.svg',
  },
  {
    name: 'google_arrow_left',
    path: '/icons/google-font-icon/arrow-left.svg',
  },
  {
    name: 'google_arrow_top',
    path: '/icons/google-font-icon/arrow-top.svg',
  },
  {
    name: 'google_menu',
    path: '/icons/google-font-icon/menu.svg',
  },
];