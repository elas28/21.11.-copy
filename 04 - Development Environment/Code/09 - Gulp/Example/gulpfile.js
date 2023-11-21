// Help https://gulpjs.com/docs/en/getting-started/working-with-files/

const gulp = require('gulp'); // Define gulp
const uglify = require('gulp-uglify'); // Define gulp uglify
const cleanCSS = require('gulp-clean-css');

gulp.task('uglify', async function () { // Create a task
    gulp.src('js/**/*.js') // Where is the source located
        .pipe(uglify()) // Transform files in a pipeline (pipe)
        .pipe(gulp.dest('build/js')); // Destination is a folder called build
});

gulp.task('minify-css', () => {
    return gulp.src('styles/*.css')
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(gulp.dest('build/css'));
});

function defaultTask(cb) {
    // place code for your default task here
    cb();
}

exports.default = defaultTask

// Run with gulp uglify in order to run this gulp file
// Tutorial at https://developers.google.com/web/ilt/pwa/introduction-to-gulp#:~:text=Gulp%20is%20a%20cross%2Dplatform,source%20files%20into%20production%20files.