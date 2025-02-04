import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react-swc";
import svgr from "vite-plugin-svgr";

import { nodePolyfills } from "vite-plugin-node-polyfills";

export default defineConfig(() => ({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true,
      },
    }),
    nodePolyfills({
      globals: {
        Buffer: true,
        global: true,
        process: true,
      },
    }),
  ],
  resolve: {
    alias: {
      app: resolve(__dirname, "./src/app"),
      pages: resolve(__dirname, "./src/pages"),
      shared: resolve(__dirname, "./src/shared"),
      widgets: resolve(__dirname, "./src/widgets"),
      features: resolve(__dirname, "./src/features"),
      entities: resolve(__dirname, "./src/entities"),
      processes: resolve(__dirname, "./src/processes"),
    },
  },
  define: {
    global: "globalThis",
  },
  optimizeDeps: {
    include: ["buffer"],
  },
  build: {
    target: "esnext", // Устанавливаем современный таргет
    rollupOptions: {
      external: ["vm-browserify"], // Исключаем vm-browserify, если он не нужен
    },
  },

  esbuild: {
    target: "esnext", // Современный таргет для esbuild
  },
}));
