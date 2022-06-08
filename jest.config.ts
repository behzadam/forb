import type { Config } from '@jest/types'

const path = require('path')
const { lstatSync, readdirSync } = require('fs')
// get listing of packages in the mono repo
const basePath = path.resolve(__dirname, 'packages')
const packages = readdirSync(basePath).filter(name => {
  return lstatSync(path.join(basePath, name)).isDirectory()
})

// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  preset: 'ts-jest',
  testEnvironment: 'node',
  moduleNameMapper: {
    ...packages.reduce(
      (acc, name) => ({
        ...acc,
        [`@ahoopen/${name}(.*)$`]: `<rootDir>/packages/./${name}/src/$1`,
      }),
      {}
    ),
  },
}

export default config
