import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'File Transfer',
  path: '/file-transfer/',
  description: 'A client-side secure P2P file sharing using WebRTC',
  keywords: ['send-files', 'file-transfer', 'file share', 'file sharing', 'P2P file sharing'],
  component: () => import('./file-transfer.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-09-26'),
});
