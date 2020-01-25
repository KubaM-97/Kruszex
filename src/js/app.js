require("!style-loader!css-loader!./style.css")
require('file-loader?name=[name].[ext]!./index.html');
require('file-loader?name=[name].[ext]!./gold.html');
require('file-loader?name=[name].[ext]!./silver.html');
require('file-loader?name=[name].[ext]!./tips.html');
require('file-loader?name=[name].[ext]!./contact.html');
import './script.js'
import './fetch.js'
import 'jquery'
// import './fontello/**/*'
// import "./gold.html"
// import "./silver.html"
// import "./tips.html"
// import "./contact.html"