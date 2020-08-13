const path = require('path');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
  module: {
    rules: [
      {
        // Quando precisar um arquivo js, que não ta na 
        // pastas "exclude", usa o babel loader
        test: /\.js$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' }
      },
      {
        // CSS loader lê o arquivo CSS e as importações (imagens por exemplo)
        // Style loader pega o CSS interpretado e injetar dentro do HTML
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        // File loader para carregar as imagens a serem utilizadas no projeto
        test: /.*\.(gif|png|jpe?g)$/i,
        use: { loader: 'file-loader' }
      }
    ]
  }
};