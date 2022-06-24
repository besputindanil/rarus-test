module.exports = {
  extends: [
    "stylelint-config-recommended",
    "stylelint-scss",
    "stylelint-config-recommended-scss",
    "stylelint-config-recommended-vue/scss",
    "stylelint-prettier/recommended"
  ],
  rules: {
    "no-empty-source": null,
    "at-rule-no-unknown": null,
    "value-keyword-case": null,
    "scss/dollar-variable-empty-line-before": null,
    "font-family-name-quotes": null
  }
};

