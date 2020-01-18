const path = require("path");
module.export = {
    entry: "./src/app.js",
    output: {
        filename: './dist/bundle.js'
    },
    mode: "development",
    module: {
        rules: [{
                test: /\.script.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ["env"]
                    }
                },
        }, {
                test: /\.(png|jpg|gif|jiff)$/,
                exclude: /node_modules/,
                use: {
                    loader: 'url-loader',
                    options: {
                        limit: 8192
                    }
                },
        },

               ]
    }
    
}
