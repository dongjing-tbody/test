module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": ["standard-with-typescript",'eslint-config-standard-with-typescript','prettier'],//+prettier'
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        project: './tsconfig.eslint.json'//
    },
    plugins: ['prettier'],//+ plugins: ['prettier']
    "rules": {
        'prettier/prettier': 'error'//+  'prettier/prettier': 'error'
    }
}
