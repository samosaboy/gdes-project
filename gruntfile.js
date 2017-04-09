module.exports = function(grunt) {

    // Package Configuration
    grunt.initConfig ({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                files: {
                    'public/stylesheets/style.css': 'sass/style.scss'
                }
            }
        },
        pug: {
            compile: {
                options: {
                    data: [{
                        debug: false,
                        pretty: true
                    }]
                },
                files: [{
                    src: ['*.pug'],
                    dest: 'public/',
                    expand: true,
                    ext: '.html'
                }]
            }
        },
        watch: {
            css: {
                files: ['sass/**/*.scss'],
                tasks: ['sass'],
                options: {
                    livereload: true, // needed to run LiveReload
                }
            },
            scripts: {
                files: ['public/main.js']
            }
        }
    });

    //Plugin Initilization
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-sass');
    grunt.loadNpmTasks('grunt-contrib-pug');

    // Default tasks
    grunt.registerTask('default', ['sass', 'pug']);
}