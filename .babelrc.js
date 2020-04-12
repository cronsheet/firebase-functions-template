module.exports = function (api) {
  const presets = [
    '@babel/preset-env',
    // 'minify'
  ];
  const plugins = [
    '@babel/transform-runtime'
  ];
  const ignore = [
    api.env('production') && '**/*.test.js',
    api.env('production') && '**/*.md'
  ].filter(Boolean);

  return {
    presets,
    plugins,
    ignore
  };
}