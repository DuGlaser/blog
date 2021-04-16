module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  plugins: ['stylelint-order', 'stylelint-config-rational-order/plugin'],
  rules: {
    'value-keyword-case': null,
    'no-empty-source': null,
    // Property Order
    'order/properties-order': [[], { severity: 'warning' }],
    'plugin/rational-order': [
      true,
      {
        'border-in-box-model': false,
        'empty-line-between-groups': false,
        severity: 'warning',
      },
    ],
  },
};
