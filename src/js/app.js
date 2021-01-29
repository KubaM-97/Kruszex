require("!style-loader!css-loader!../css/style.css")
require('file-loader?name=[name].[ext]!../index.html');
require('file-loader?name=[name].[ext]!../gold.html');
require('file-loader?name=[name].[ext]!../silver.html');
require('file-loader?name=[name].[ext]!../tips.html');
require('file-loader?name=[name].[ext]!../contact.html');
import './different_functions.js'
import './fetch_price.js'
import 'jquery'