import { defineConfig } from "tsup";

const config = defineConfig({
  entry: ["src"],
  format: ["esm"],
  dts: true,
  sourcemap: true,
  clean: true,
  target: "esnext"
});

export default config;