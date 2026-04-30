// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  vite: {
    // Usamos la propiedad 'vite' para pasar configuraciones adicionales 
    // sin romper los plugins pre-instalados de TanStack.
    build: {
      // Dejamos que el framework decida la estructura interna, 
      // pero nos aseguramos de que limpie la carpeta antes de cada build.
      emptyOutDir: true,
    },
  },
});