import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::", // allows IPv6 & local network access
    port: 8080,
  },
  plugins: [react()],  
  base: '/nexus-three/',
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
