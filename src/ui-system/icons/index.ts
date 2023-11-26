export type GoogleFontIcons =
    'google_search'
  | 'google_close'
  | 'google_check'
  | 'google_arrow_right'
  | 'google_arrow_bottom'
  | 'google_arrow_left'
  | 'google_arrow_top'
  | 'google_menu';

interface Icon {
  name: GoogleFontIcons;
  path: string;
}

export const icons: Icon[] = [
  {
    name: 'google_search',
    path: '/icons/google-icon/search.svg',
  },
  {
    name: 'google_close',
    path: '/icons/google-icon/close.svg',
  },
  {
    name: 'google_check',
    path: '/icons/google-icon/check.svg',
  },
  {
    name: 'google_arrow_right',
    path: '/icons/google-icon/arrow-right.svg',
  },
  {
    name: 'google_arrow_bottom',
    path: '/icons/google-icon/arrow-bottom.svg',
  },
  {
    name: 'google_arrow_left',
    path: '/icons/google-icon/arrow-left.svg',
  },
  {
    name: 'google_arrow_top',
    path: '/icons/google-icon/arrow-top.svg',
  },
  {
    name: 'google_menu',
    path: '/icons/google-icon/menu.svg',
  },
];