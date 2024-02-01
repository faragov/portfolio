export const module = {
  rules: [
    {
      test: require.resolve('wow.js'),
      loader: 'exports-loader?this.WOW'
    }
  ]
};