import eslint from "@rollup/plugin-eslint"
import { defineConfig } from 'vite'
import { resolve } from "path";

export default defineConfig(
    {
        resolve:{
        alias: [
            { find: '@', replacement: resolve(__dirname, './src') }
        ]
        },
        build: {
            target: 'es2021',
            outDir: 'build',
        },
        server: {
            port: 3000,
            host: '0.0.0.0',
            hmr: true,
        },
        plugins: [
            {
                ...eslint({include: 'src/**/*.+(js|jsx|ts|tsx'}),
                enforce: 'pre',
                apply: 'build',
            },
        ]
    }
)