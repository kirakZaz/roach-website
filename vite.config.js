import path from 'path';
import url from 'url';

import react from '@vitejs/plugin-react-swc';
import { defineConfig, transformWithEsbuild } from 'vite';

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
    plugins: [
        // React plugin = enables Fast Refresh
        react(),

        // Allow .js files in /src to be treated as JSX
        {
            name: 'treat-js-files-as-jsx',
            async transform(code, id) {
                if (!id.match(/src\/.*\.js$/)) return null;
                return transformWithEsbuild(code, id, {
                    loader: 'jsx',
                    jsx: 'automatic',
                });
            },
        },
    ],

    resolve: {
        alias: {
            '@': path.resolve(__dirname, 'src'),
        },
    },

    optimizeDeps: {
        include: ['@emotion/react', '@emotion/styled'],
        esbuildOptions: {
            loader: {
                '.js': 'jsx',
            },
        },
    },

    esbuild: {
        jsx: 'automatic',
        loader: 'jsx',
        include: /\.[jt]sx?$/,
    },

    css: {
        preprocessorOptions: {
            scss: {
                api: 'modern-compiler',
            },
        },
    },

    base: '/',

    server: {
        host: true, // ensure accessible for browser hot socket
        port: 4000,
        open: true, // automatically open in browser
        strictPort: true,
        // Polling only if file watchers fail (e.g. in Docker/VM)
        watch: {
            usePolling: false,
            interval: 100,
        },
        hmr: {
            protocol: 'ws',
            host: 'localhost',
            clientPort: 4000, // ensures correct WS port for HMR
        },
    },

    build: {
        outDir: 'dist',
        assetsDir: 'assets',
        sourcemap: false,
        minify: 'esbuild',
        cssMinify: true,
        cssCodeSplit: false,
        rollupOptions: {
            output: {
                entryFileNames: 'assets/[name]-[hash].js',
                chunkFileNames: 'assets/[name]-[hash].js',
                assetFileNames: 'assets/[name]-[hash].[ext]',
            },
        },
        commonjsOptions: {
            transformMixedEsModules: true,
        },
    },
});
