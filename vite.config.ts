import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-plugin-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tsconfigPaths()],
  resolve: {
    alias: {
      "@component": "src/components",
      "@styles/*": "src/styles/*",
      "@hooks/*": "src/hooks/*",
      "@util": "src/utils",
      "@context": "src/context",
      "@types": "src/types",
      "@layout": "src/layout",
      "@service/*": "src/service/*"
    },
    extensions: ['.ts', '.tsx', '.js', '.json']
  }
})
