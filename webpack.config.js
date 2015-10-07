var bower_dir = __dirname + '/bower_components';
var config = {
  addVendor: function (name, path) {
    this.resolve.alias[name] = path;
    this.module.noParse.push(new RegExp(path));
  },
  entry: ['./src/scripts/app.js'],
  resolve: { alias: {} },
  output: {
    path: './build',
    filename: 'bundle.js'
  },
  module: {
    noParse: [],
    loaders: [
      { test: /\.js$/, loader: 'jsx-loader' },
      { test: /\.css$/, loader: 'style-loader!css-loader' },
      { test: /\.(png|woff|woff2|eot|ttf|svg)$/, loader: 'url-loader?limit=100000' }
    ]
  }
};

config.addVendor('react', bower_dir + '/react/react-with-addons.js');
config.addVendor('jquery', bower_dir + '/jquery/dist/jquery.min.js');
config.addVendor('bootstrap', bower_dir + '/bootstrap/dist/js/bootstrap.min.js');
config.addVendor('bootstrap.css', bower_dir + '/bootstrap/dist/css/bootstrap.css');

module.exports = config;
