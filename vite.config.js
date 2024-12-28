import { ViteMinifyPlugin } from "vite-plugin-minify";

export default {
  appType: "mpa", // Multi-page application
  plugins: [ViteMinifyPlugin()],
  root: "./src", // This is where your HTML files inside the src folder are located
  build: {
    outDir: "../dist", // Output folder for built files
    emptyOutDir: true, // Clean the output directory before building
    assetsInclude: ['**/*.woff2', '**/*.woff', '**/*.ttf', '**/*.eot'], // Include font files
    rollupOptions: {
      input: {
        index: "./index.html", // index.html is outside the src folder
        about: "./src/about.html", // about.html inside src
        animation: "./src/animation.html", // animation.html inside src
        illustration: "./src/illustration.html", // illustration.html inside src
        projects: "./src/projects.html", // projects.html inside src
        deta_surf: "./src/projects/deta_surf.html", // deta_surf.html inside the src/projects folder
        gibbon: "./src/projects/gibbon.html", // gibbon.html inside the src/projects folder
      },
    },
  },
};

