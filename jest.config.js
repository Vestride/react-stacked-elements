module.exports = {
  testRunner: 'jest-circus/runner',
  clearMocks: true,
  transform: {
    '\\.[jt]sx?$': [
      'babel-jest',
      {
        presets: [
          ['@babel/preset-env', { targets: { node: 'current' } }],
          '@babel/preset-react',
          '@babel/preset-typescript',
        ],
      },
    ],
  },
  testPathIgnorePatterns: ['node_modules', '<rootDir>/docs'],
  moduleNameMapper: {
    '\\.css$': 'identity-obj-proxy',
  },
};
