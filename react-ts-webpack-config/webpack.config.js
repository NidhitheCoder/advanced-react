{
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/, 
          exclude: /node_modules/,
          use: ["babel-loader"],
        },
        { 
          test: /\.(ts|tsx)$/, 
          loader: "ts-loader" 
        }
      ]
    }
    resolve: {
      extensions: ["*", ".js", ".jsx", ".ts", ".tsx"]
    }
}
