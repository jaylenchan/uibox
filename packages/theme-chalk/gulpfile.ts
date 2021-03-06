const { series, src, dest } = require('gulp')
const sass = require('gulp-dart-sass')
const autoPrefixer = require('gulp-autoprefixer')
const cssmin = require('gulp-cssmin')

function compile() {
  return src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoPrefixer({}))
    .pipe(cssmin())
    .pipe(dest('./lib'))
}

function copyfont() {
  return src('./src/fonts/**').pipe(cssmin()).pipe(dest('./lib/fonts'))
}

exports.build = series(compile, copyfont)
