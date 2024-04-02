import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import reactRefresh from '@vitejs/plugin-react-refresh';
import replace from '@rollup/plugin-replace';
import terser  from '@rollup/plugin-terser';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    reactRefresh(),
    replace({
      preventAssignment: true,
    }),
    terser(), 
  ]
})
