import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from "@rollup/plugin-commonjs";

export default {
    input: "main.mjs",
    output: {
        file: "bundle.mjs",
        format: "es",
    },
    plugins: [nodeResolve(), commonjs()],
}