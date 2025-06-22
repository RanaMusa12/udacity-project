import gulp from 'gulp';
import shell from 'gulp-shell';

// Default task - build and serve with Parcel
gulp.task('default', shell.task([
  'parcel starter/index.html'  // Changed from just 'index.html'
]));

// Test task
gulp.task('test', shell.task([
  'mocha test/shuffle.test.js',
  'npx cypress run'
]));