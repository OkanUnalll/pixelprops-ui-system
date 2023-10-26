import { IRoute } from '@/models/routes';

const routes: IRoute[] = [
  {
    name: 'Home',
    route: '/',
    collepse: [],
    key: 'home',
  },
  {
    name: 'About',
    route: '/about',
    collepse: [],
    key: 'about',
  },
  {
    name: 'Game Dev',
    route: '/game-dev',
    key: 'game-dev',
    collepse: [
        {
            name: 'Game Dev 1',
            route: '/game-dev-1',
            key: 'game-dev-1',
        },
        {
            name: 'Game Dev 2',
            route: '/game-dev-2',
            key: 'game-dev-2',
        },
    ],
  },
];

export default routes;