module.exports = {
  printWidth: 100,
  tabWidth: 4,
  useTabs: false,
  semi: false,
  vueIndentScriptAndStyle: false,
  singleQuote: true,
  quoteProps: 'as-needed',
  bracketSpacing: true,
  trailingComma: 'none',
  jsxBracketSameLine: false,
  jsxSingleQuote: false,
  arrowParens: 'always',
  insertPragma: false,
  requirePragma: false,
  proseWrap: 'preserve',
  htmlWhitespaceSensitivity: 'strict',
  endOfLine: 'lf',
  rangeStart: 0,
  overrides: [
    {
      files: '*.md',
      options: {
        tabWidth: 2
      }
    }
  ]
}