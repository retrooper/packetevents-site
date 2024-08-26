// vite.config.ts
import path from "path";
import react from "file:///C:/Users/retro/VisualStudioCode/pe-site/vite-project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///C:/Users/retro/VisualStudioCode/pe-site/vite-project/node_modules/vite/dist/node/index.js";
import mdx from "file:///C:/Users/retro/VisualStudioCode/pe-site/vite-project/node_modules/@mdx-js/rollup/index.js";
var __vite_injected_original_dirname = "C:\\Users\\retro\\VisualStudioCode\\pe-site\\vite-project";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    { enforce: "pre", ...mdx({
      /* jsxImportSource: …, otherOptions… */
    }) }
  ],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZXRyb1xcXFxWaXN1YWxTdHVkaW9Db2RlXFxcXHBlLXNpdGVcXFxcdml0ZS1wcm9qZWN0XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxyZXRyb1xcXFxWaXN1YWxTdHVkaW9Db2RlXFxcXHBlLXNpdGVcXFxcdml0ZS1wcm9qZWN0XFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9yZXRyby9WaXN1YWxTdHVkaW9Db2RlL3BlLXNpdGUvdml0ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHBhdGggZnJvbSBcInBhdGhcIlxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiXG5pbXBvcnQgbWR4IGZyb20gJ0BtZHgtanMvcm9sbHVwJ1xuXG4gXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKSxcbiAgICB7ZW5mb3JjZTogJ3ByZScsIC4uLm1keCh7LyoganN4SW1wb3J0U291cmNlOiBcdTIwMjYsIG90aGVyT3B0aW9uc1x1MjAyNiAqL30pfSxcbiAgXSxcbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICBcIkBcIjogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgXCIuL3NyY1wiKSxcbiAgICB9LFxuICB9LFxufSkiXSwKICAibWFwcGluZ3MiOiAiO0FBQTBWLE9BQU8sVUFBVTtBQUMzVyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBSGhCLElBQU0sbUNBQW1DO0FBTXpDLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUFDLE1BQU07QUFBQSxJQUNkLEVBQUMsU0FBUyxPQUFPLEdBQUcsSUFBSTtBQUFBO0FBQUEsSUFBd0MsQ0FBQyxFQUFDO0FBQUEsRUFDcEU7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssS0FBSyxRQUFRLGtDQUFXLE9BQU87QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
