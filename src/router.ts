import { createRouter, createWebHistory } from 'vue-router';
import { layouts } from './layouts/index';
import HomePage from './pages/Home.page.vue';
import NotFound from './pages/404.page.vue';
import { tools } from './tools';
import { config } from './config';
import { routes as demoRoutes } from './ui/demo/demo.routes';

const toolsRoutes = tools.map(({ path, name, component, ...config }) => ({
  path,
  name,
  component,
  meta: { isTool: true, layout: layouts.toolLayout, name, ...config },
}));
const toolsRedirectRoutes = tools
  .filter(({ redirectFrom }) => redirectFrom && redirectFrom.length > 0)
  .flatMap(
    ({ path, redirectFrom }) => redirectFrom?.map(redirectSource => ({ path: redirectSource, redirect: path })) ?? [],
  );

const router = createRouter({
  history: createWebHistory(config.app.baseUrl),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomePage,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('./pages/About.vue'),
    },
    {
      path: '/peer-share/receive/',
      name: 'peer-share',
      component: () => import('./tools/peer-share/peer-share.vue'),
      meta: {
        layout: layouts.toolLayout,
        name: 'Peer Share',
        path: '/peer-share/',
        description: 'PeerShare: A secure client-side P2P connection offering features like file sharing and live clipboard.',
        keywords: ['send-files', 'file share', 'file sharing', 'Peer-to-Peer (P2P)', 'Secure Connection', 'Client-Side', 'File Sharing', 'Live Clipboard', 'Data Transfer', 'Collaboration', 'Real-Time Communication'],
        createdAt: new Date('2024-09-26'),
      },
    },
    ...toolsRoutes,
    ...toolsRedirectRoutes,
    ...(config.app.env === 'development' ? demoRoutes : []),
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
});

export default router;
