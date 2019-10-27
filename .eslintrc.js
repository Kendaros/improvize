module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    '@nuxtjs/eslint-config-typescript'
  ],
  // add your custom rules here
  rules: {
    'vue/no-v-html': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }]
  }
}
