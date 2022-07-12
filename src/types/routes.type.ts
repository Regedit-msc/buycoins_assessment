import { RouteProps } from 'react-router-dom';

export interface RouteInterface extends RouteProps {
  component: React.LazyExoticComponent<React.FC>;
  subRoutes?: RouteInterface[];
}
