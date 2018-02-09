var gulp = require('gulp');
var fileinclude  = require('gulp-file-include');

gulp.task('fileinclude', function() {
    gulp.src('src/**.html')
        .pipe(fileinclude({
          prefix: '@@',
          basepath: '@file'
        }))
    .pipe(gulp.dest('dist'));
});
gulp.task('default', function(){
	gulp.src('src/assets/**/*')
    	.pipe(gulp.dest('dist/assets'));
    
    gulp.src('src/dialogs/**/*')
    	.pipe(gulp.dest('dist/dialogs'));
    
    gulp.src('src/lang/**/*')
    	.pipe(gulp.dest('dist/lang'));
    
    gulp.src('src/net/**/*')
    	.pipe(gulp.dest('dist/net'));
    
    gulp.src('src/themes/**/*')
    	.pipe(gulp.dest('dist/themes'));
    	
    gulp.src('src/third-party/**/*')
    	.pipe(gulp.dest('dist/third-party'));
    
    gulp.src('src/*.js')
    	.pipe(gulp.dest('dist'));
})
