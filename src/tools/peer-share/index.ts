import { Share } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'Peer Share',
  path: '/peer-share/',
  description: 'PeerShare: A secure client-side P2P connection offering features like file sharing and live clipboard.',
  keywords: ['send-files', 'file share', 'file sharing', 'Peer-to-Peer (P2P)', 'Secure Connection', 'Client-Side', 'File Sharing', 'Live Clipboard', 'Data Transfer', 'Collaboration', 'Real-Time Communication'],
  component: () => import('./peer-share.vue'),
  icon: Share,
  createdAt: new Date('2024-09-26'),
});
