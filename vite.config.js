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
        master: "./src/projects/master.html",
        ai_fortune: "./src/projects/ai_fortune.html",
        caretta: "./src/projects/caretta.html",
        dream: "./src/projects/dream.html",
        ton: "./src/projects/ton.html",
      },
    },
  },
};


