var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var gulp = require('gulp');
var concat = require('gulp-concat');
var order = require('gulp-order');
var sass = require('gulp-sass');
var autoprefix = require('gulp-autoprefixer');
var uglify = require('gulp-uglify');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var gutil = require('gulp-util');

var sassDir = 'assets/src/css/scss';
var sassTargetDir = 'assets/build/css/';
var jsDir = 'assets/src/js';
var jsTargetDir = 'assets/build/js';

var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

gulp.task('sass', function () {
    gulp.src(sassDir + '/**/*.scss')
        //.pipe(sass().on('error', sass.logError))
        
    .pipe(sass().on('error', function (err) {
        onError(err);
        this.emit('end');
    }))

    .pipe(autoprefix({
            browsers: ['last 10 versions'],
            cascade: false
        }))
        //.pipe(gulp.dest(sassTargetDir));
        .pipe(gulp.dest(sassTargetDir))
        .pipe(cleanCSS())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest(sassTargetDir));
});

gulp.task('lint', function() {
  return gulp.src(jsDir + '/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('js', function() {
  //gulp.src(jsDir + '/**/*.js')
    //.pipe(addsrc(jsDir + '/**/*.js'))
    gulp.src(jsDir + '/**/*.js')
    .pipe(gulp.dest(jsTargetDir))
    .pipe(uglify())
    .on('error', function (err) {
            onError(err);
            this.emit('end');
        })
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest(jsTargetDir))
});


gulp.task('watch', function(){
    gulp.watch(sassDir + '/*.scss', ['sass']);
    gulp.watch(jsDir + '/*.js', ['js']);
})

gulp.task('default', [
	'sass',
    'lint',
	'js',
	'watch'
]);