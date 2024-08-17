import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";
import image from "@rollup/plugin-image";

export default defineConfig({
  input: "src/index.tsx",
  output: {
    dir: "dist",
    format: "es",
    name: "@codsod/react-native-chat",
  },
  external: ["react", "react-native"],
  plugins: [typescript({ tsconfig: "tsconfig.json" }), image()],
});
