import { lazy } from 'react';
import { RouteInterface } from 'src/types/routes.type';


export const routes: RouteInterface[] = [
  {
    path: '',
    component: lazy(() => import('src/pages/base')),
  },
  {
    path: '*',
    component: lazy(() => import('src/pages/NotFound')),
  },
];
