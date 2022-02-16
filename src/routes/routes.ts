export interface IRoute {
  path?: string;
  index?: boolean;
  component: string;
  routes?: IRoute[];
}

const routes: IRoute[] = [
  {
    path: '/',
    component: 'Layout',
    routes: [
      {
        index: true,
        component: 'Home',
      },
      {
        path: '/about',
        component: 'About',
      },
      {
        path: '*',
        component: 'NotFound',
      },
    ],
  },
];
export default routes;
