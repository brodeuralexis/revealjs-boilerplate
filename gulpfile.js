const { series, parallel, watch, src, dest } = require('gulp')
const ejs = require('gulp-ejs')
const rename = require('gulp-rename')
const webserver = require('gulp-webserver')
const del = require('del')

function clean () {
  // Clean the `dist` folder.
  return del(['dist/**/*', 'dist'])
}

function vendoring () {
  return src('vendor/**/*')
    .pipe(dest('dist/vendor'))
}

function assets () {
  return del(['dist/assets'])
    .then(function () {
      return src('src/assets/**/*').pipe(dest('dist/assets'))
    })
}

function html () {
  return src('src/index.ejs')
    .pipe(ejs({ title: 'The State of Packet Filtering' }))
    .pipe(rename({ extname: '.html' }))
    .pipe(dest('dist'))
}

const build = series(clean, vendoring, assets, html)

function watchEjs () {
 return watch(['src/**/*.ejs'], html)
}

function watchAssets () {
  return watch(['src/assets/**/*'], assets)
}

const serve = series(build, parallel(watchEjs, watchAssets, function serve () {
  return src('dist')
    .pipe(webserver({
      port: 8080,
      livereload: {
        enable: true,
        filter: function (fileName) {
          return !fileName.match(/.map$/)
        }
      },
    }))
}))

exports.default = build
exports.serve = serve
exports.clean = clean
