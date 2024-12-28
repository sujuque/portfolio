import { ViteMinifyPlugin } from "vite-plugin-minify";

export default {
  appType: "mpa", 
  plugins: [ViteMinifyPlugin()],
  root: "./src", // This is where your HTML files inside the src folder are located
  base: '/portfolio/',
  build: {
    outDir: "../dist", // Output folder for built files
    emptyOutDir: true, // Clean the output directory before building
    rollupOptions: {
      input: {
        index: "./src/index.html", 
        about: "./src/about.html", 
        animation: "./src/animation.html", 
        illustration: "./src/illustration.html", 
        projects: "./src/projects.html", 
        deta_surf: "./src/projects/deta_surf.html", 
        gibbon: "./src/projects/gibbon.html", 
      },
    },
  },
};


