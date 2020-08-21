const path = require('path');

module.exports = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },

    entry: {
        main: ['./src/app']
    },

    output: {
        path: path.resolve('./dist'),
        filename: '[name].js'
    }
};