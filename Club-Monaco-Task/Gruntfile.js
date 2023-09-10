module.exports = function (grunt) {
    grunt.initConfig({
      sass: {
        dist: {
          files: {
            'css/style.css': 'sass/style.scss' // Output CSS file and input Sass file
          }
        }
      },
      watch: {
        styles: {
          files: ['sass/**/*.scss'], // Watch for changes in all .scss files in the 'sass' folder and its subfolders
          tasks: ['sass'], // Run the 'sass' task when changes are detected
          options: {
            livereload: true // Enable live-reloading in the browser
          }
        }
      }
    });
  
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['sass', 'watch']); // Define the default task to run Sass compilation and watch for changes
  };
  