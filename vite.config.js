// import { fileURLToPath, URL } from "node:url";

// import { defineConfig } from "vite";
// import vue from "@vitejs/plugin-vue";

// import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [vue(),VueI18nPlugin({
//     include: resolve(dirname(fileURLToPath(import.meta.url)), './src/language/**'),
//   })],
//   resolve: {
//     alias: {
//       "@": fileURLToPath(new URL("./src", import.meta.url)),
//     },
//   },
//   devServer: {
//     // proxy: 'https://localhost:8000'
// }
// });

import { fileURLToPath, URL } from "node:url";

import { resolve, dirname } from "node:path";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import VueI18nPlugin from "@intlify/unplugin-vue-i18n/vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),VueI18nPlugin({
    include: resolve(dirname(fileURLToPath(import.meta.url)), './src/language/**'),
  })],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
});



// export default defineConfig({
//   plugins: [vue()],
//   resolve: {
//     alias: {
//       '@': resolve(__dirname, 'src'),
//     },
//   },
//   server: {
//     proxy: {
//     '/api': {
//       target: 'http://localhost:3000/',
//       changeOrigin: true,
//       secure: false,
//       rewrite: (path) => path.replace(/^\/api/, '')
//     },
//     cors:false
//     },
//   },
//   define: {
//     'process.env': {}
//   }
// })