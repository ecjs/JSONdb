'use strict';

module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-simple-mocha');
  grunt.loadNpmTasks('grunt-jscs');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.initConfig({
    jshint: {
      all: ['index.js'],
      options: {
        jshintrc: true
      }
    },

    jscs: {
      src: 'index.js',
      options: {
        config: '.jscsrc'
      }
    },

    simplemocha: {
      src: ['test/**/*.js']
    }
  });
  grunt.registerTask('test', ['jshint', 'jscs', 'simplemocha']);
  grunt.registerTask('default', ['test']);
};
