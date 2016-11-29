var path = require("path");
var fs = require('fs');


module.exports = function (grunt) {

    grunt.initConfig({

        pkg: grunt.file.readJSON('package.json'),

        webpack: {
            bundle: {
                entry: path.resolve('src/main'),
                watch: true,
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            loader: 'babel-loader',
                            query: {
                                presets: ['es2015']
                            },
                            exclude: /node_modules|templates/
                        },
                        {
                            test: /\.html$/,
                            loader: 'html-loader'
                        }
                    ]
                },
                output: {
                    path: path.resolve("public/js"),
                    publicPath: "/js/",
                    filename: 'bundle.js'
                },
                resolveLoader: {
                    root: path.resolve('node_modules')
                },
                resolve: {
                    root: [
                        path.resolve('src')
                    ],
                    extensions: [
                        '',
                        '.js',
                        '.json'
                    ]
                }
            }
        },

        connect: {
            server: {
                options: {
                    keepalive: 1,
                    base: [
                        "./public/"
                    ],
                    port: 8001,
                    hostname: '*'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-webpack');
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', [
        'webpack',
        'connect'
    ]);

};
