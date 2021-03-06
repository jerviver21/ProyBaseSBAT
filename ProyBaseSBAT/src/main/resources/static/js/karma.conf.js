// File: karma.conf.js
// Karma configuration
module.exports = function(config) {
	config.set({
		// base path that will be used to resolve files and exclude
		basePath: '',
		// testing framework to use (jasmine/mocha/qunit/...)
		frameworks: ['jasmine'],
		// list of files / patterns to load in the browser
		files: [
			'angular.js',
			'angular-mocks.js',
			'modules.js',
			'empleados/empleados_service.js',
			'test/mocks/empleados_module_mocks.js',
			'empleados/empleados_controller.js',
			'test/empleados/empleados_controller_test1.js',
			'test/empleados/empleados_controller_test2.js'
		],
		// list of files / patterns to exclude
		exclude: [],
		// web server port
		port: 8080, 
		// level of logging
		// possible values: LOG_DISABLE || LOG_ERROR ||
		// LOG_WARN || LOG_INFO || LOG_DEBUG
		logLevel: config.LOG_INFO,
		// enable / disable watching file and executing tests
		// whenever any file changes
		autoWatch: true,
		// Start these browsers, currently available:
		// - Chrome
		// - ChromeCanary
		// - Firefox
		// - Opera
		// - Safari (only Mac)
		// - PhantomJS
		// - IE (only Windows)
		browsers: ['Chrome'],
		// Continuous Integration mode
		// if true, it captures browsers, runs tests, and exits
		singleRun: false
	});
};