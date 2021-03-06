const sortOrderSmacss = require('stylelint-config-property-sort-order-smacss/generate');

module.exports = {
    plugins: [
        "stylelint-order",
    ],
    extends: [
        'stylelint-config-recommended',
        'stylelint-config-recommended-scss',
    ],
    rules: {
        'color-hex-case': 'lower',
        'color-hex-length': 'short',
        'order/properties-order': [
            sortOrderSmacss()
        ],
    },
}
