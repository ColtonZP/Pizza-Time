module.exports = {
	parser: 'babel-eslint',
	env: {
		es6: true,
		node: true,
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:prettier/recommended',
	],
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly',
	},
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 2018,
		sourceType: 'module',
	},
	plugins: ['react', 'jsx-a11y'],
	rules: {
		'react/jsx-filename-extension': 0,
		'require-jsdoc': [
			'error',
			{
				require: {
					FunctionDeclaration: false,
					MethodDefinition: false,
					ClassDeclaration: false,
					ArrowFunctionExpression: false,
					FunctionExpression: false,
				},
			},
		],
	},
};
