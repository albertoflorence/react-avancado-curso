module.exports = {
  staticDirs: ['../public'],
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-interactions', 'storybook-addon-next-router'],
  core: {
    builder: 'webpack5'
  },
  webpackFinal: config => {
    config.resolve.modules.push(`${process.cwd()}/src`)
    return config
  }
}
