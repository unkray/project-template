(function () {
  'use strict';

  var
    baseDir = "./src",
    distBaseDir = "./build",
    layoutDir = "./build/html";

  module.exports = {
    path: {
      // App
      baseDir: baseDir,
      cssDir: baseDir + "/css/*.css",
      cssDirDest: baseDir + "/css",
      scssDir: baseDir + "/scss/**/*.scss",
      scssDirDest: baseDir + "/scss",
      scssСonnect: baseDir + "/scss/style.scss",
      jsDir: baseDir + "/js/*.js",
      htmlDir: baseDir + "/*.html",
      fontsDir: baseDir + "/fonts/*",
      imgDir: distBaseDir + "/img/**/*",
      imgDestDir: baseDir + "/img/",
      iconDir: distBaseDir + "/img/",
      bowerDir: baseDir + "/bower",
      extraFiles: [baseDir + "/*.*", "!" + baseDir + "/*.html", "!" + baseDir + "/robots.txt"],
      allAppFiles: baseDir + "/**/*",
	    jadeLocation: baseDir + "/markups/**/*.jade",
	    jadeCompiled: baseDir + "/markups/_pages/*.jade",
	    jadeDestination: baseDir,
	    jadeMain: baseDir + "/markups/main.jade",
	    compassConfig: "config.rb",
      // Dist
      distDir: distBaseDir,
      distCssDir: distBaseDir + "/css/",
      distJsDir: distBaseDir + "/js/",
      distFontsDir: distBaseDir + "/fonts/",
      distPlayerFontsDir: distBaseDir + "/css/fonts/",
      distImgDir: distBaseDir + "/img/",
      distImgPlayerDir: distBaseDir + "/css/img/",
      distDelDir: [distBaseDir + "/**", "!" + distBaseDir, "!" + distBaseDir + "/img", "!" + distBaseDir + "/img/**/*"],
      allDistFiles: distBaseDir + "/**/*",
      layoutDir: layoutDir,
      layoutDelDir: [layoutDir + "/**", "!" + layoutDir],
    },
    conn: {
      host: "host",
      user: "user",
      password: "password",
      folder: "domains/site-name/public_html/",
      src: [distBaseDir + "/**/*"],
      base: distBaseDir
    }
  };
})();