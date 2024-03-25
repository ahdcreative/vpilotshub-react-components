import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";
import typescript from "rollup-plugin-typescript2";
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';
import image from '@rollup/plugin-image';
import packageJson from './package.json' assert {type: "json"};

export default {
    input: 'src/index.ts',
    output: [
        {
            file: packageJson.main,
            format: 'cjs',
            sourcemap: true
        },
        {
            file: packageJson.module,
            format: 'esm',
            sourcemap: true
        },
    ],
    plugins: [
        peerDepsExternal(),
        resolve(),
        commonjs(),
        image(),
        typescript({useTsconfigDeclarationDir: true}),
        postcss({
            plugins: [
                require('tailwindcss')
            ],
        }),
        copy({
            targets: [
                {
                    src: 'src/vars.scss',
                    dest: 'build',
                    rename: 'vars.scss'
                },
                {
                    src: 'src/typography.scss',
                    dest: 'build',
                    rename: 'typography.scss'
                },
                {
                    src: 'node_modules/leafleet/dist/images',
                    dest: 'build'
                }
            ]
        })
    ]
}