import React, { Suspense, useCallback, useMemo } from 'react';
import { BrowserRouter as Router, useRoutes } from 'react-router-dom';
import type { RouteObject, BrowserRouterProps } from 'react-router-dom';

import routes from './routes';
import type { IRoute } from './routes';

import { Spin } from '@douyinfe/semi-ui';

const RoutesElement = ({ routes: originRoutes }: { routes: IRoute[] }) => {
  const genRoutes = useCallback((routes?: IRoute[]): RouteObject[] | null => {
    if (!routes?.length) return null;

    return routes.map(({ path, component, index, routes: nested }) => {
      const Comp = React.lazy(
        () => import(/* @vite-ignore */ `../pages/${component}.tsx`),
      );

      const element = (
        <Suspense fallback={<Spin />}>
          <Comp />
        </Suspense>
      );

      return {
        path,
        index,
        element,
        children: genRoutes(nested),
      } as RouteObject;
    });
  }, []);

  const routes = useMemo(
    () => genRoutes(originRoutes),
    [originRoutes, genRoutes],
  );

  return useRoutes(routes as RouteObject[]);
};

const RootRouter = ({ ...browserRouterProps }: BrowserRouterProps) => (
  <Router {...browserRouterProps}>
    <RoutesElement routes={routes} />
  </Router>
);

export default RootRouter;
