import { defineConfig } from 'sanity';
import { structureTool } from 'sanity/structure';
import { schemaTypes } from './schemaTypes';
import { structure } from './structure';

const projectId = '32ehe8go';
const dataset = 'production';

export default defineConfig({
  name: 'hj-offices',
  title: 'HJ Offices Consortium',
  projectId,
  dataset,
  plugins: [structureTool({ structure })],
  schema: {
    types: schemaTypes,
  },
});
