import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./styles/main.scss";
          @import "../node_modules/bulma/sass/utilities/_all.sass";
          @import "../node_modules/bulma/sass/base/_all.sass";
          @import "../node_modules/bulma/sass/elements/button.sass";
          @import "../node_modules/bulma/sass/elements/container.sass";
          @import "../node_modules/bulma/sass/elements/title.sass";
          @import "../node_modules/bulma/sass/form/_all.sass";
          @import "../node_modules/bulma/sass/layout/hero.sass";
          @import "../node_modules/bulma/sass/layout/section.sass";
          @import "../node_modules/bulma/sass/grid/_all.sass";
          @import "../node_modules/bulma/sass/elements/table.sass";
          @import "../node_modules/bulma/sass/elements/box.sass";
          @import "../node_modules/bulma/sass/components/message.sass";
          @import "../node_modules/bulma/sass/components/card.sass";
          @import "../node_modules/bulma/sass/components/navbar.sass";
          @import "../node_modules/bulma/sass/helpers/visibility.sass";
          @import "../node_modules/bulma/sass/helpers/spacing.sass";
          @import "../node_modules/bulma/sass/helpers/typography.sass";`
      }
    }
  }
})
