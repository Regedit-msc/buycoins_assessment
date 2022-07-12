export * from './components.type';
export * from './containers.type';
export * from './theme.type';
export * from './routes.type';

export type Pagination = {
  page: number;
  limit: number;
  query: { [key: string]: any };
};