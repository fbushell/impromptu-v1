module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		sass: {
			dist: {
				files: {
					'sass/main.css' : 'sass/main.sass'
				}
			}
		},
		autoprefixer: {
	    single_file: {
	      src: 'sass/main.css',
	      dest: 'app/styles/main.css'
	    },
	  },
		watch: {
			css: {
				files: '**/*.sass',
				tasks: ['sass']
			},
			prefix: {
				files: 'sass/main.css',
				tasks: ['autoprefixer']
			}
		}
	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}