module.exports = {
	extends: [
		'stylelint-config-standard-scss',
		'stylelint-config-prettier',
		'stylelint-config-recess-order',
	],
	// add your custom config here
	// https://stylelint.io/user-guide/configuration
	rules: {
		'indentation': 'tab',
		'block-no-empty': null, // 空のブロックの指定をしない
		'font-family-no-missing-generic-family-keyword': null, // font-familyに関する指定をしない
		'no-descending-specificity': null, // 詳細度並び順の指定をしない
		'comment-empty-line-before': null, // コメント前へ改行を入れる指定をしない
		'at-rule-empty-line-before': null, // @前へ改行をいれる指定をしない
		'declaration-empty-line-before': null, // @後や--後へ改行をいれる指定をしない
		'selector-id-pattern': null, // idでkebab-case以外も許容
		'selector-class-pattern': null, // classでkebab-case以外も許容
		'keyframes-name-pattern': null, // keyframesでkebab-case以外も許容
		'scss/at-mixin-pattern': null, // mixinでkebab-case以外も許容
		'scss/dollar-variable-pattern': null, // $変数でkebab-case以外も許容
		'scss/percent-placeholder-pattern': null, // %placeholderでkebab-case以外も許容
		'number-max-precision': [3, { severity: 'warning' }], // 小数点以下3桁以上でもwarningで止める
		'alpha-value-notation': ['number', { severity: 'warning' }], // 0.3が30%となっていてもwarningで止める
		'font-family-name-quotes': [
			'always-where-recommended',
			{ severity: 'warning' },
		], // font-family名のルールが適合していなくてもwarningで止める
		'selector-type-no-unknown': [
			// セレクタータイプチェックの除外指定
			true, // 基本はチェックする
			{ ignoreTypes: ['_', 'x'] }, // チェック除外項目
		],
		'at-rule-no-unknown': [
			true,
			{ ignoreAtRules: ['include', 'mixin', 'each'] },
		],
	},
};
