// This file is not going through babel transformation, so, we write it in vanilla JS.
module.exports = {
    webpack: (config, { dev, vendor }) => {
        config.resolve.extensions = ['.js', '.json'];
        return config;
    },

    copyIgnore: [
        '**/*.js',
        '**/*.json'
    ],

    defaultConfig: {
        entry: {
            content: './content.js',
            popup: './popup.html'
        },
        output: {
            filename: '[name].js'
        }
    }
};
