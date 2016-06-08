'use strict';

module.exports = function(grunt) {
  var files = {};
  files.css = [
    'public/css/**/*.css'
  ];

  grunt.initConfig({

    sass: {
      dist: {
        files: [{
          expand: true,
          cwd: 'client/scss',
          src: '**/*.scss',
          dest: 'public/css',
          ext: '.css'
        }]
      }
    },

    postcss: {
      options: {
        map: true, // inline sourcemaps
        processors: [
          require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
        ]
      },
      dist: {
        src: 'public/css/index.css'
      }
    },

    cssmin: {
      options: {
        sourceMap: grunt.cli.tasks.indexOf('dev') !== -1,
      },
      target: {
        files: {
          'public/css/index.min.css': ['public/css/index.css']
        }
      }
    },

    watch: {
      css: {
        files: [
          'client/scss/**/*.scss',
        ],
        tasks: ['taskCss'],
        options: {
          spawn: false,
        },
      }
    },

    clean: {
      src: [
      'public/css'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-sass');

  grunt.registerTask('taskCss', ['sass', 'cssmin'])
  grunt.registerTask('default', ['clean', 'taskCss']);
  grunt.registerTask('dev', ['default', 'watch']);
};
