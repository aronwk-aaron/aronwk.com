import Home from '@/pages/Home.vue';

import NotFound from '@/pages/NotFound.vue';

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '*',
    component: NotFound,
  },
];
export default routes
