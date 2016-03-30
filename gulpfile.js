var gulp = require("gulp");
var sass = require("gulp-sass");
var jade = require("gulp-jade");
var runSequence = require('run-sequence');
var pleeease = require('gulp-pleeease');
var plumber = require("gulp-plumber");
var browser = require("browser-sync");
var uglify = require("gulp-uglify");
var concat = require('gulp-concat');
var fs = require('fs');
var notify = require('gulp-notify');
var extend = require('gulp-extend');

gulp.task("server", function() {
  browser({
    server: {
      baseDir: "./build/"
    }
  });
});

gulp.task('modules',function(){
  return gulp.src('./node_modules/font-awesome/fonts/*')
  .pipe(gulp.dest('./build/fonts/'));
});

gulp.task("js", function() {
    return gulp.src(JSON.parse(fs.readFileSync("source/javascripts/app.json", "utf8")).scripts)
    .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
    .pipe(concat("app.js"))
    .pipe(uglify({preserveComments:'some'}))
    .pipe(gulp.dest("./build"))
    .pipe(browser.reload({stream:true}))
});

gulp.task('sass', function(){
  return gulp.src(['./source/stylesheets/app.scss'])
  .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
  .pipe(sass())
  .pipe(pleeease({
    fallbacks: {
      autoprefixer: ['last 4 versions']
    }
  }))
  .pipe(gulp.dest('./build'))
  .pipe(browser.reload({stream:true}))
})

gulp.task('jade', function () {
  return gulp.src(['./source/**/*.jade', '!./source/partials/*.jade', '!./source/layouts/*.jade'])
  .pipe(plumber())
  .pipe(jade({basedir: 'source/'}))
  .pipe(gulp.dest('./build/'))
  .pipe(browser.reload({stream:true}))
});

gulp.task('image', function () {
  return gulp.src('./source/**/images/**/*')
  .pipe(gulp.dest('./build/'));
});

gulp.task('font', function () {
  return gulp.src('./source/fonts/**/*')
  .pipe(gulp.dest('./build/fonts/'));
});

gulp.task('watch', function(){
    runSequence('server');
    gulp.watch('source/stylesheets/**/*.scss', ['sass']);
    gulp.watch('source/javascripts/**/*.js', ['js']);
    gulp.watch("source/**/*.jade", ["jade"]);
    gulp.watch("source/images/**/*",["image"]);
    gulp.watch("source/fonts/**/*",["font"]);
});

gulp.task('build', function(callback) {
  return runSequence(
    'modules',
    ['font', 'jade', 'sass', 'js', 'image'],
    callback
  );
});

gulp.task('default', function(callback) {
  return runSequence(
    'build',
    'watch',
    callback
  );
});
