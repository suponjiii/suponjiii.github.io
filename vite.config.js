import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    watch: {
      usePolling: true
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./styles/main.scss";
          @import "../node_modules/bulma/sass/utilities/_index.scss";
          @import "../node_modules/bulma/sass/base/_index.scss";
          @import "../node_modules/bulma/sass/elements/button.scss";
          @import "../node_modules/bulma/sass/layout/container.scss";
          @import "../node_modules/bulma/sass/elements/title.scss";
          @import "../node_modules/bulma/sass/form/_index.scss";
          @import "../node_modules/bulma/sass/layout/hero.scss";
          @import "../node_modules/bulma/sass/layout/section.scss";
          @import "../node_modules/bulma/sass/grid/_index.scss";
          @import "../node_modules/bulma/sass/elements/table.scss";
          @import "../node_modules/bulma/sass/elements/box.scss";
          @import "../node_modules/bulma/sass/components/message.scss";
          @import "../node_modules/bulma/sass/components/card.scss";
          @import "../node_modules/bulma/sass/components/navbar.scss";
          @import "../node_modules/bulma/sass/helpers/visibility.scss";
          @import "../node_modules/bulma/sass/helpers/spacing.scss";
          @import "../node_modules/bulma/sass/helpers/typography.scss";`
      }
    }
  }
})
