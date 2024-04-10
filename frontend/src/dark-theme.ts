import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const quickTableDarkTheme: CustomThemeConfig = {
	name: 'quick-table-dark-theme',
	properties: {
		// =~= Theme Properties =~=
		'--theme-font-family-base': `system-ui`,
		'--theme-font-family-heading': `system-ui`,
		'--theme-font-color-base': '0 0 0',
		'--theme-font-color-dark': '255 255 255',
		'--theme-rounded-base': '9999px',
		'--theme-rounded-container': '8px',
		'--theme-border-base': '1px',
		// =~= Theme On-X Colors =~=
		'--on-primary': '0 0 0',
		'--on-secondary': '255 255 255',
		'--on-tertiary': '255 255 255',
		'--on-success': '255 255 255',
		'--on-warning': '0 0 0',
		'--on-error': '0 0 0',
		'--on-surface': '255 255 255',
		// =~= Theme Colors  =~=
		// primary | #36ab63
		'--color-primary-50': '225 242 232', // #e1f2e8
		'--color-primary-100': '215 238 224', // #d7eee0
		'--color-primary-200': '205 234 216', // #cdead8
		'--color-primary-300': '175 221 193', // #afddc1
		'--color-primary-400': '114 196 146', // #72c492
		'--color-primary-500': '54 171 99', // #36ab63
		'--color-primary-600': '49 154 89', // #319a59
		'--color-primary-700': '41 128 74', // #29804a
		'--color-primary-800': '32 103 59', // #20673b
		'--color-primary-900': '26 84 49', // #1a5431
		// secondary | #070807
		'--color-secondary-50': '218 218 218', // #dadada
		'--color-secondary-100': '205 206 205', // #cdcecd
		'--color-secondary-200': '193 193 193', // #c1c1c1
		'--color-secondary-300': '156 156 156', // #9c9c9c
		'--color-secondary-400': '81 82 81', // #515251
		'--color-secondary-500': '7 8 7', // #070807
		'--color-secondary-600': '6 7 6', // #060706
		'--color-secondary-700': '5 6 5', // #050605
		'--color-secondary-800': '4 5 4', // #040504
		'--color-secondary-900': '3 4 3', // #030403
		// tertiary | #6537cb
		'--color-tertiary-50': '232 225 247', // #e8e1f7
		'--color-tertiary-100': '224 215 245', // #e0d7f5
		'--color-tertiary-200': '217 205 242', // #d9cdf2
		'--color-tertiary-300': '193 175 234', // #c1afea
		'--color-tertiary-400': '147 115 219', // #9373db
		'--color-tertiary-500': '101 55 203', // #6537cb
		'--color-tertiary-600': '91 50 183', // #5b32b7
		'--color-tertiary-700': '76 41 152', // #4c2998
		'--color-tertiary-800': '61 33 122', // #3d217a
		'--color-tertiary-900': '49 27 99', // #311b63
		// success | #b91ac8
		'--color-success-50': '245 221 247', // #f5ddf7
		'--color-success-100': '241 209 244', // #f1d1f4
		'--color-success-200': '238 198 241', // #eec6f1
		'--color-success-300': '227 163 233', // #e3a3e9
		'--color-success-400': '206 95 217', // #ce5fd9
		'--color-success-500': '185 26 200', // #b91ac8
		'--color-success-600': '167 23 180', // #a717b4
		'--color-success-700': '139 20 150', // #8b1496
		'--color-success-800': '111 16 120', // #6f1078
		'--color-success-900': '91 13 98', // #5b0d62
		// warning | #eca705
		'--color-warning-50': '252 242 218', // #fcf2da
		'--color-warning-100': '251 237 205', // #fbedcd
		'--color-warning-200': '250 233 193', // #fae9c1
		'--color-warning-300': '247 220 155', // #f7dc9b
		'--color-warning-400': '242 193 80', // #f2c150
		'--color-warning-500': '236 167 5', // #eca705
		'--color-warning-600': '212 150 5', // #d49605
		'--color-warning-700': '177 125 4', // #b17d04
		'--color-warning-800': '142 100 3', // #8e6403
		'--color-warning-900': '116 82 2', // #745202
		// error | #ff3814
		'--color-error-50': '255 225 220', // #ffe1dc
		'--color-error-100': '255 215 208', // #ffd7d0
		'--color-error-200': '255 205 196', // #ffcdc4
		'--color-error-300': '255 175 161', // #ffafa1
		'--color-error-400': '255 116 91', // #ff745b
		'--color-error-500': '255 56 20', // #ff3814
		'--color-error-600': '230 50 18', // #e63212
		'--color-error-700': '191 42 15', // #bf2a0f
		'--color-error-800': '153 34 12', // #99220c
		'--color-error-900': '125 27 10', // #7d1b0a
		// surface | #131614
		'--color-surface-50': '220 220 220', // #dcdcdc
		'--color-surface-100': '208 208 208', // #d0d0d0
		'--color-surface-200': '196 197 196', // #c4c5c4
		'--color-surface-300': '161 162 161', // #a1a2a1
		'--color-surface-400': '90 92 91', // #5a5c5b
		'--color-surface-500': '19 22 20', // #131614
		'--color-surface-600': '17 20 18', // #111412
		'--color-surface-700': '14 17 15', // #0e110f
		'--color-surface-800': '11 13 12', // #0b0d0c
		'--color-surface-900': '9 11 10' // #090b0a
	}
};
