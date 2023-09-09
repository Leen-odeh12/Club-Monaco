module.exports = function(grunt) {
    grunt.initConfig({
      sass: {
        options: {
          sourceMap: true, // Generate source maps
          outputStyle: 'compressed', // Set the output style (nested, expanded, compact, compressed)
        },
        dist: {
          files: {
            'css/style.css': 'sass/style.scss' // Output file: Input file
          }
        }
      },
      watch: {
        options: {
          livereload: 12345 // Change the port number to a different one
        },
        sass: {
          files: ['sass/**/*.scss'],
          tasks: ['sass'],
        },
      },
      
    });
  
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
  
    grunt.registerTask('default', ['watch']); // Default task to watch for changes
  };
  