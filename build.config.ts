import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  entries: [
    'src/index',
    'src/rules',
  ],
  clean: true,
  declaration: true,
  externals: [
    'unconfig',
    'magic-string',
    '@unocss/core',
    '@unocss/config',
  ],
  rollup: {
    dts: {
      respectExternal: false,
    },
  },
})