import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src'],       
  outDir: 'dist',
  format: ['esm'],
  splitting: true,                     
  sourcemap: true,
  dts: {
    entry: ['src/components/index.ts', 'src/layouts/index.ts'],
  },
  clean: true,
  target: 'esnext',                           
});
