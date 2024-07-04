import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss('./tailwind.config.js'),
    autoprefixer(),
  ],

  
  define: {
    global: 'window',
  },
})

// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import tailwindcss from 'tailwindcss';
// import autoprefixer from 'autoprefixer';

// export default defineConfig({
//   plugins: [
//     react(),
//   ],
//   css: {
//     postcss: {
//       plugins: [
//         tailwindcss('./tailwind.config.js'),
//         autoprefixer(),
//       ],
//     },
//   },
//   define: {
//     global: 'window',
//   },
// });



