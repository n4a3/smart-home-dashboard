module.exports = ({ config, mode }) => {
  config.module.rules.unshift({
    test: /\.stories\.tsx?$/,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          presets: [['react-app', { flow: false, typescript: true }]]
        }
      },
      {
        loader: require.resolve('@storybook/source-loader'),
        options: { parser: 'typescript' }
      }
    ],
    enforce: 'pre'
  });
  config.resolve.extensions.push('.ts', '.tsx');
  return config;
};
