import { FC } from 'react';

export type RouteType = {
  path: string;
  authRequired: boolean;
  component: FC;
};
