const gulp = require('gulp')
const concat = require('gulp-concat')
const minifyCss = require('gulp-minify-css')
const clean = require('gulp-clean')
const gulpUglify = require('gulp-uglify')
const pump = require('pump')
var babel = require('gulp-babel'),
    uglify = require('gulp-uglify');

const paths = {
    scripts: ['js/app.js', 'js/*.js', 'js/**/*.js'],
    styles: ['./**/*.css', ]
}
gulp.task('clean-js', function() {
    return gulp.src('./build.js')
        .pipe(clean())
})

gulp.task('build', ['clean-js'], function() {
    return gulp.src(paths.scripts)
        .pipe(concat("build.js"))
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(gulpUglify())
        .pipe(gulp.dest('./'))

})

gulp.task('minify-css', function() {
    return gulp.src(paths.styles)
        .pipe(concat('build.css'))
        .pipe(minifyCss())
        .pipe(gulp.dest('./'))
})
