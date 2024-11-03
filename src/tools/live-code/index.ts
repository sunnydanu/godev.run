import { StreamOutlined } from '@vicons/material';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Live Code',
  path: '/live-code',
  description: 'Playground for React, Vue, Svelte, Solid, Typescript, Python, Go, Ruby, PHP and 80+ languages/frameworks.',
  keywords: ['live code', 'code runner', 'fiddler', 'code playground'],
  component: () => import('./live-code.vue'),
  icon: StreamOutlined,
  createdAt: new Date('2024-10-05'),
});
