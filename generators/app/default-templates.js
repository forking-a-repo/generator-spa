module.exports = [
  { src: '_README.md', dest: 'README.md' },
  { src: 'LICENSE' },
  { src: 'CODE_OF_CONDUCT.md' },
  { src: '.env.sample', dest: '.env' },
  { src: '.eslintrc' },
  { src: '.prettierrc' },
  { src: '.env.sample', dest: '.env' },
  { src: 'jestConfig.js' },
  { src: '_craco.config.js', dest: 'craco.config.js' },
  { src: '_package.json', dest: 'package.json' },
  { src: 'public/**', dest: 'public' },
  { src: 'src/**', dest: 'src' },
  { src: '.github/**', dest: '.github' },
];