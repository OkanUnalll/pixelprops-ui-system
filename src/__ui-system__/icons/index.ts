export type GoogleFontIcons =
    'google_search'
  | 'google_close'
  | 'google_check'
  | 'google_arrow_right'
  | 'google_arrow_bottom'
  | 'google_arrow_left'
  | 'google_arrow_top'
  | 'google_menu'
  | 'google_delete'
  | 'google_error'
  | 'google_person'
  | 'google_open_in_new'
  | 'google_location_on'
  | 'google_home'
  | 'google_call'
  | 'google_block'
  | 'google_autorenew'
  | 'google_warning'
  | 'google_start'
  | 'google_settings';

interface Icons {
  name: GoogleFontIcons;
  path: string;
}

export type Icon = GoogleFontIcons;

export const icons: Icons[] = [
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
  {
    name: 'google_delete',
    path: '/icons/google-icon/delete.svg',
  },

  {
    name: 'google_error',
    path: '/icons/google-icon/error.svg',
  },
  {
    name: 'google_person',
    path: '/icons/google-icon/person.svg',
  },
  {
    name: 'google_open_in_new',
    path: '/icons/google-icon/open-in-new.svg',
  },
  {
    name: 'google_location_on',
    path: '/icons/google-icon/location-on.svg',
  },
  {
    name: 'google_home',
    path: '/icons/google-icon/home.svg',
  },
  {
    name: 'google_call',
    path: '/icons/google-icon/call.svg',
  },
  {
    name: 'google_block',
    path: '/icons/google-icon/block.svg',
  },
  {
    name: 'google_autorenew',
    path: '/icons/google-icon/autorenew.svg',
  },
  {
    name: 'google_warning',
    path: '/icons/google-icon/warning.svg',
  },
  {
    name: 'google_start',
    path: '/icons/google-icon/start.svg',
  },
  {
    name: 'google_settings',
    path: '/icons/google-icon/settings.svg',
  },
];