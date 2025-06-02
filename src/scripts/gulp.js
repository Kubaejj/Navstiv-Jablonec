const gulp = require('gulp');
const nunjucksRender = require('gulp-nunjucks-render');
const data = require('gulp-data');
const plumber = require('gulp-plumber');
const fs = require('fs');
const path = require('path');

// Cesty ke šablonám a datům
const paths = {
  templates: 'src/templates/**/*.html',
  dataFile: 'src/data.json',
  dest: 'dist'
};

// Načte JSON data s proměnnými
function getData() {
  return JSON.parse(fs.readFileSync(paths.dataFile));
}

// Render task
function render() {
  return gulp.src(['src/templates/*.html', '!src/templates/layout.html'])
    .pipe(plumber())
    .pipe(data(getData))
    .pipe(nunjucksRender({
      path: ['src/templates/'] // pro include/extend
    }))
    .pipe(gulp.dest(paths.dest));
}

// Watcher
function watchFiles() {
  gulp.watch(paths.templates, render);
  gulp.watch(paths.dataFile, render);
}

exports.default = gulp.series(render, watchFiles);