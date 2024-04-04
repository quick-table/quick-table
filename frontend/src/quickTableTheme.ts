
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const quickTableTheme: CustomThemeConfig = {
    name: 'quickTableTheme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "2px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #53c67d 
		"--color-primary-50": "229 246 236", // #e5f6ec
		"--color-primary-100": "221 244 229", // #ddf4e5
		"--color-primary-200": "212 241 223", // #d4f1df
		"--color-primary-300": "186 232 203", // #bae8cb
		"--color-primary-400": "135 215 164", // #87d7a4
		"--color-primary-500": "83 198 125", // #53c67d
		"--color-primary-600": "75 178 113", // #4bb271
		"--color-primary-700": "62 149 94", // #3e955e
		"--color-primary-800": "50 119 75", // #32774b
		"--color-primary-900": "41 97 61", // #29613d
		// secondary | #8554cf 
		"--color-secondary-50": "237 229 248", // #ede5f8
		"--color-secondary-100": "231 221 245", // #e7ddf5
		"--color-secondary-200": "225 212 243", // #e1d4f3
		"--color-secondary-300": "206 187 236", // #cebbec
		"--color-secondary-400": "170 135 221", // #aa87dd
		"--color-secondary-500": "133 84 207", // #8554cf
		"--color-secondary-600": "120 76 186", // #784cba
		"--color-secondary-700": "100 63 155", // #643f9b
		"--color-secondary-800": "80 50 124", // #50327c
		"--color-secondary-900": "65 41 101", // #412965
		// tertiary | #c3bf4b 
		"--color-tertiary-50": "246 245 228", // #f6f5e4
		"--color-tertiary-100": "243 242 219", // #f3f2db
		"--color-tertiary-200": "240 239 210", // #f0efd2
		"--color-tertiary-300": "231 229 183", // #e7e5b7
		"--color-tertiary-400": "213 210 129", // #d5d281
		"--color-tertiary-500": "195 191 75", // #c3bf4b
		"--color-tertiary-600": "176 172 68", // #b0ac44
		"--color-tertiary-700": "146 143 56", // #928f38
		"--color-tertiary-800": "117 115 45", // #75732d
		"--color-tertiary-900": "96 94 37", // #605e25
		// success | #38b4e4 
		"--color-success-50": "225 244 251", // #e1f4fb
		"--color-success-100": "215 240 250", // #d7f0fa
		"--color-success-200": "205 236 248", // #cdecf8
		"--color-success-300": "175 225 244", // #afe1f4
		"--color-success-400": "116 203 236", // #74cbec
		"--color-success-500": "56 180 228", // #38b4e4
		"--color-success-600": "50 162 205", // #32a2cd
		"--color-success-700": "42 135 171", // #2a87ab
		"--color-success-800": "34 108 137", // #226c89
		"--color-success-900": "27 88 112", // #1b5870
		// warning | #ff5252 
		"--color-warning-50": "255 229 229", // #ffe5e5
		"--color-warning-100": "255 220 220", // #ffdcdc
		"--color-warning-200": "255 212 212", // #ffd4d4
		"--color-warning-300": "255 186 186", // #ffbaba
		"--color-warning-400": "255 134 134", // #ff8686
		"--color-warning-500": "255 82 82", // #ff5252
		"--color-warning-600": "230 74 74", // #e64a4a
		"--color-warning-700": "191 62 62", // #bf3e3e
		"--color-warning-800": "153 49 49", // #993131
		"--color-warning-900": "125 40 40", // #7d2828
		// error | #920707 
		"--color-error-50": "239 218 218", // #efdada
		"--color-error-100": "233 205 205", // #e9cdcd
		"--color-error-200": "228 193 193", // #e4c1c1
		"--color-error-300": "211 156 156", // #d39c9c
		"--color-error-400": "179 81 81", // #b35151
		"--color-error-500": "146 7 7", // #920707
		"--color-error-600": "131 6 6", // #830606
		"--color-error-700": "110 5 5", // #6e0505
		"--color-error-800": "88 4 4", // #580404
		"--color-error-900": "72 3 3", // #480303
		// surface | #53c67d 
		"--color-surface-50": "229 246 236", // #e5f6ec
		"--color-surface-100": "221 244 229", // #ddf4e5
		"--color-surface-200": "212 241 223", // #d4f1df
		"--color-surface-300": "186 232 203", // #bae8cb
		"--color-surface-400": "135 215 164", // #87d7a4
		"--color-surface-500": "83 198 125", // #53c67d
		"--color-surface-600": "75 178 113", // #4bb271
		"--color-surface-700": "62 149 94", // #3e955e
		"--color-surface-800": "50 119 75", // #32774b
		"--color-surface-900": "41 97 61", // #29613d
	}
}