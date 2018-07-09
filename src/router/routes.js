import Home from '@/pages/Home.vue';
import Projects from '@/pages/Projects.vue';
import Resume from '@/pages/Resume.vue';
import Social from '@/pages/Social.vue';
import Contact from '@/pages/Contact.vue';
import Security from '@/pages/Security.vue';

import NotFound from '@/pages/NotFound.vue';

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/projects',
    component: Projects
  },
  {
    path: '/resume',
    component: Resume
  },
  {
    path: '/social',
    component: Social
  },
  {
    path: '/security',
    component: Security
  },
  {
    path: '/contact',
    component: Contact
  },
  {
    path: '*',
    component: NotFound,
  },
];
export default routes
