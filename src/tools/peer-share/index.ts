import { ArrowsShuffle } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'File Transfer',
  path: '/peer-share/',
  description: 'PeerShare - A client-side secure P2P file sharing using WebRTC',
  keywords: ['send-files', 'file-transfer', 'file share', 'file sharing', 'P2P file sharing'],
  component: () => import('./peer-share.vue'),
  icon: ArrowsShuffle,
  createdAt: new Date('2024-09-26'),
});
