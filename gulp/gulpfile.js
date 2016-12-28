// Gulpfile

// var gulp = require('gulp');

// gulp.task('name', function() {

// });

// gulp.task('copy', function() {
// 	gulp.src('index.html')
// 	.pipe(gulp.dest('assets'));
// });


// var gutil = require('gulp-util');

// gulp.task('log', function() {
// 	gutil.log('~My Log Task~');
// });


// var sass = require('gulp-sass');

// gulp.task('sass', function() {
// 	gulp.src('styles/main.scss')
// 	.pipe(sass({style: 'expanded'}))
// 		.on('error', gutil.log)
// 	.pipe(gulp.dest('assets'));
// });


// var coffee = require('gulp-coffee');

// gulp.task('coffee', function() {
// 	gulp.src('scripts/hello.coffee')
// 	.pipe(coffee({bare: true}))
// 		.on('error', gutil.log)
// 	.pipe(gulp.dest('scripts'));
// });


// var uglify = require('gulp-uglify'),
// 	concat = require('gulp-concat');

// gulp.task('js', function() {
// 	gulp.src('scripts/*.js')
// 	.pipe(uglify())
// 	.pipe(concat('script.js'))
// 	.pipe(gulp.dest('assets'));
// });


// gulp.task('default', ['coffee', 'js']);


// gulp.task('watch', function() {
// 	gulp.watch('scripts/hello.coffee', ['coffee']);
// 	gulp.watch('scripts/*.js', ['js']);
// 	gulp.watch('styles/main.scss', ['sass']);
// });


// var connect = require('gulp-connect');

// gulp.task('connect', function() {
// 	connect.server({
// 		root: '.',
// 		livereload: true
// 	});
// });



var gulp = require('gulp'),
    gutil = require('gulp-util'),
    sass = require('gulp-sass'),
    coffee = require('gulp-coffee'),
    connect = require('gulp-connect'),
    uglify = require('gulp-uglify'),
    concat = require('gulp-concat');

var coffeeSources = ['scripts/hello.coffee'],
    jsSources = ['scripts/*.js'],
    sassSources = ['styles/*.scss'],
    htmlSources = ['**/*.html'],
    outputDir = 'assets';


gulp.task('log', function() {
  gutil.log('== My First Task ==')
});

gulp.task('copy', function() {
  gulp.src('index.html')
  .pipe(gulp.dest(outputDir))
});

gulp.task('sass', function() {
  gulp.src(sassSources)
  .pipe(sass({style: 'expanded'}))
    .on('error', gutil.log)
  .pipe(gulp.dest('assets'))
  .pipe(connect.reload())
});

gulp.task('coffee', function() {
  gulp.src(coffeeSources)
  .pipe(coffee({bare: true})
    .on('error', gutil.log))
  .pipe(gulp.dest('scripts'))
});

gulp.task('js', function() {
  gulp.src(jsSources)
  .pipe(uglify())
  .pipe(concat('script.js'))
  .pipe(gulp.dest(outputDir))
  .pipe(connect.reload())
});

gulp.task('watch', function() {
  gulp.watch(coffeeSources, ['coffee']);
  gulp.watch(jsSources, ['js']);
  gulp.watch(sassSources, ['sass']);
  gulp.watch(htmlSources, ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  })
});

gulp.task('html', function() {
  gulp.src(htmlSources)
  .pipe(connect.reload())
});

gulp.task('default', ['html', 'coffee', 'js', 'sass', 'connect', 'watch']);