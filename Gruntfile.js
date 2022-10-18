"use strict";
module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {
          compass: false,
          sourcemap: false,
        },
        files: {
          "dist/css/main.css": ["src/sass/main.scss"],
        },
      },
    },
    imagemin: {
      dynamic: {
        files: [
          {
            cwd: "src/images/",
            expand: true,
            src: ["**/*.{png,jpg}"],
            dest: "dist/images",
          },
        ],
      },
    },
    uglify: {
      options: {
        mangle: false,
      },
      my_target: {
        files: {
          "dist/js/script.min.js": ["src/js/scripts.js"],
        },
      },
    },
    watch: {
      js: {
        files: ["src/js/*.js"],
        tasks: ["uglify"],
      },
      css: {
        files: ["src/sass/*.scss"],
        tasks: ["sass"],
        options: { livereload: true },
      },
    },
    cssmin: {
      target: {
        files: [
          {
            expand: true,
            cwd: "dist/css",
            src: ["*.css", "!*.min.css"],
            dest: "dist/css",
            ext: ".min.css",
          },
        ],
      },
    },
  });

  // Load tasks

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-imagemin");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.registerTask("default", ["sass", "uglify", "imagemin", "cssmin"]);
};
