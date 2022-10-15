import { RouteType } from '../schema/routes';
import { Red, Green, Blue, Login } from '../pages/';

export const ROUTES: RouteType[] = [
  {
    path: '/red',
    authRequired: false,
    component: Red,
  },
  {
    path: '/green',
    authRequired: false,
    component: Green,
  },
  {
    path: '/blue',
    authRequired: false,
    component: Blue,
  },
  {
    path: '/login',
    authRequired: false,
    component: Login,
  },
];
