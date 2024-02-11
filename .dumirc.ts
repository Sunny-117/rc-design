import { defineConfig } from 'dumi';
import * as path from 'path';

export default defineConfig({
  outputPath: 'docs-dist',
  title: 'rc-design',
  themeConfig: {
    name: 'rc-design',
    // logo: '/logo.png',
  },
  resolve: {
    docDirs: ['docs'],
    atomDirs: [{ type: 'component', dir: 'src' }],
    // entryFile: './src/index.tsx', //这里是API表格解析入口
  },
  // favicons: ['./logo.png'],
  base: '/rc-design/',
  publicPath: '/rc-design/',
  // exportStatic: {},
  alias: {
    'rc-design': path.resolve(__dirname, 'src'),
  },
});
