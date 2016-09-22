module.exports = function (config) {
    config.set({

        basePath: './',

        files: [
            'www/lib/angular/angular.js',
            'www/lib/angular-ui-router/release/angular-ui-router.js',
            'www/lib/angular-mocks/angular-mocks.js',
            'www/lib/angular-bootstrap/ui-bootstrap-tpls.min.js',
            'www/**/*module.js',
            'www/common/**/*.js',
            'www/home/**/*.js',
            'www/*.js'
        ],

        exclude: [
            'www/**/*.scenario.js'
        ],

        autoWatch: true,

        frameworks: ['jasmine'],

        browsers: ['Chrome'],

        plugins: [
            'karma-chrome-launcher',
            'karma-firefox-launcher',
            'karma-jasmine',
            'karma-junit-reporter'
        ],

        junitReporter: {
            outputFile: 'test_out/unit.xml',
            suite: 'unit'
        }

    });
};
