import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve: {
    alias: {
      '@': "/src"
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
})
