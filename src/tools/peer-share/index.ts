import { Share } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Peer Share',
  path: '/peer-share/',
  description: 'PeerShare: A secure client-side P2P connection offering features like file sharing and live clipboard.',
  keywords: ['send', 'send files', 'file share', 'file', 'p2p', 'File Sharing', 'Live Clipboard', 'Data Transfer', 'Collaboration', 'Real-Time Communication'],
  component: () => import('./peer-share.vue'),
  icon: Share,
  createdAt: new Date('2024-09-26'),
});
