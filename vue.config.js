module.exports = {
  css: {
    loaderOptions: {
      sass: {
        data: `
        @import "@/global-styles/colors.scss";
        @import "@/global-styles/typography.scss";
        `
      }
    }
  },

  baseUrl: undefined,
  outputDir: undefined,
  assetsDir: undefined,
  runtimeCompiler: true,
  productionSourceMap: undefined,
  parallel: undefined
};
