import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { terser } from 'rollup-plugin-terser'; // For JavaScript minification

export default defineConfig({
  plugins: [
    react(),
    // Terser is only run during production build
    process.env.NODE_ENV === 'production' && terser(),
  ],

  // Build configuration
  build: {
    minify: 'terser', // You can also use 'esbuild' for better optimization
    rollupOptions: {
      plugins: [terser()],
    },
  },

  // Other optimizations
  optimizeDeps: {
    include: [
      // List of libraries you want Vite to treat as dependencies
      'react', 'react-dom',
    ],
  },
});
