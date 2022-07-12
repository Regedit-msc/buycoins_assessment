import React, { Suspense, useMemo } from 'react';
import { useRoutes, RouteObject } from 'react-router-dom';
import { PageLoader, Row } from 'src/components';
import { RouterProps, RouteInterface } from 'src/types';
import { ErrorBoundary } from '../ErrorBoundary';


export const RouteBuilder: React.FC<RouterProps> = ({ routes: baseRoutes }) => {
  const routesToRender = useMemo(() => {
    const convertToRouteObject = (
      routes: RouteInterface[],
      initialIndex = 0,
    ): unknown => {
      return routes.map(
        ({ path, component: Component, subRoutes }, index) => {
          return {
            path,
            element: (
              <ErrorBoundary>
                <Suspense fallback={<PageLoader />} key={index + initialIndex}>
                  <Component />
                </Suspense>
              </ErrorBoundary>
            ),
            children:
              subRoutes && subRoutes?.length > 0
                ? // eslint-disable-next-line @typescript-eslint/no-unused-vars
                convertToRouteObject(subRoutes ?? [], index)
                : [],
          };
        },
      );
    };

    return convertToRouteObject(baseRoutes)

  }, [baseRoutes]);

  const baseRouter = useRoutes(routesToRender as RouteObject[]);
  return (
    <Row>
      {baseRouter}
    </Row>
  )
};
