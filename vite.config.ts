import vike from "vike/plugin";
import { defineConfig } from "vite";
import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";

export default defineConfig({
  plugins: [vike(), react(), babel({ presets: [reactCompilerPreset()] })],
});
