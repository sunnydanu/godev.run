import { Braces } from '@vicons/tabler';
import { defineTool } from '../tool';

export const tool = defineTool({
  name: 'JSON Editor',
  path: '/json-editor',
  description: 'JSON editor for viewing, editing, formatting, repairing, comparing, querying, validating, and sharing JSON data',
  keywords: ['json', 'editor', 'Online JSON viewer', 'JSON formatting tool', 'JSON validator', 'JSON comparison tool', 'Edit JSON data', 'JSON editor', 'JSON beautifier', 'JSON repair tool', 'JSON query tool', 'Share JSON online', 'Large JSON file processing'],
  component: () => import('./json-editor.vue'),
  icon: Braces,
  createdAt: new Date('2024-10-18'),
});
