/* eslint-disable no-console */
import * as esbuild from 'esbuild';
import process from 'node:process';

const BUILD_DIRECTORY = 'dist';
const PRODUCTION = process.env.NODE_ENV === 'production';
const ENTRY_POINTS = ['src/index.ts'];
const LIVE_RELOAD = !PRODUCTION;
const SERVE_PORT = 3000;

// Create esbuild context
const context = await esbuild.context({
  bundle: true,
  entryPoints: ENTRY_POINTS,
  outdir: BUILD_DIRECTORY,
  minify: PRODUCTION,
  sourcemap: !PRODUCTION,
  target: PRODUCTION ? 'es2019' : 'esnext',
  inject: LIVE_RELOAD ? ['./bin/live-reload.js'] : undefined,
  define: {
    SERVE_PORT: JSON.stringify(SERVE_PORT),
  },
});

// Production build
if (PRODUCTION) {
  await context.rebuild();
  context.dispose();
} else {
  await context.watch();
  const { port } = await context.serve({
    servedir: BUILD_DIRECTORY,
    port: SERVE_PORT,
  });

  const origin = `http://localhost:${port}`;
  const files = ENTRY_POINTS.map(
    (path) => `${origin}/${path.replace('src/', '').replace('.ts', '.js')}`,
  );

  console.log('⚡ Serving at:', origin);
  console.log('📁 Built files:', files);
}
