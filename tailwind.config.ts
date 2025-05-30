import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				primary: {
					DEFAULT: 'var(--primary)',
					foreground: 'var(--primary-foreground)',
					50: 'var(--primary-50)',
					100: 'var(--primary-100)',
					200: 'var(--primary-200)',
					300: 'var(--primary-300)',
					400: 'var(--primary-400)',
					500: 'var(--primary-500)',
					600: 'var(--primary-600)',
					700: 'var(--primary-700)',
					800: 'var(--primary-800)',
					900: 'var(--primary-900)',
				},
				secondary: {
					DEFAULT: 'var(--secondary)',
					foreground: 'var(--secondary-foreground)',
					50: 'var(--secondary-50)',
					100: 'var(--secondary-100)',
					200: 'var(--secondary-200)',
					300: 'var(--secondary-300)',
					400: 'var(--secondary-400)',
					500: 'var(--secondary-500)',
					600: 'var(--secondary-600)',
					700: 'var(--secondary-700)',
					800: 'var(--secondary-800)',
					900: 'var(--secondary-900)',
				},
				tertiary: {
					DEFAULT: 'var(--tertiary)',
					foreground: 'var(--tertiary-foreground)',
					50: 'var(--tertiary-50)',
					100: 'var(--tertiary-100)',
					200: 'var(--tertiary-200)',
					300: 'var(--tertiary-300)',
					400: 'var(--tertiary-400)',
					500: 'var(--tertiary-500)',
					600: 'var(--tertiary-600)',
					700: 'var(--tertiary-700)',
					800: 'var(--tertiary-800)',
					900: 'var(--tertiary-900)',
				},
				neutral: {
					DEFAULT: 'var(--neutral)',
					foreground: 'var(--neutral-foreground)',
					50: 'var(--neutral-50)',
					100: 'var(--neutral-100)',
					200: 'var(--neutral-200)',
					300: 'var(--neutral-300)',
					400: 'var(--neutral-400)',
					500: 'var(--neutral-500)',
					600: 'var(--neutral-600)',
					700: 'var(--neutral-700)',
					800: 'var(--neutral-800)',
					900: 'var(--neutral-900)',
				},
				success: {
					DEFAULT: 'var(--success)',
					foreground: 'var(--success-foreground)',
					50: 'var(--success-50)',
					100: 'var(--success-100)',
					200: 'var(--success-200)',
					300: 'var(--success-300)',
					400: 'var(--success-400)',
					500: 'var(--success-500)',
					600: 'var(--success-600)',
					700: 'var(--success-700)',
					800: 'var(--success-800)',
					900: 'var(--success-900)',
				},
				warning: {
					DEFAULT: 'var(--warning)',
					foreground: 'var(--warning-foreground)',
					50: 'var(--warning-50)',
					100: 'var(--warning-100)',
					200: 'var(--warning-200)',
					300: 'var(--warning-300)',
					400: 'var(--warning-400)',
					500: 'var(--warning-500)',
					600: 'var(--warning-600)',
					700: 'var(--warning-700)',
					800: 'var(--warning-800)',
					900: 'var(--warning-900)',
				},
				info: {
					DEFAULT: 'var(--info)',
					foreground: 'var(--info-foreground)',
					50: 'var(--info-50)',
					100: 'var(--info-100)',
					200: 'var(--info-200)',
					300: 'var(--info-300)',
					400: 'var(--info-400)',
					500: 'var(--info-500)',
					600: 'var(--info-600)',
					700: 'var(--info-700)',
					800: 'var(--info-800)',
					900: 'var(--info-900)',
				},
				error: {
					DEFAULT: 'var(--error)',
					foreground: 'var(--error-foreground)',
					50: 'var(--error-50)',
					100: 'var(--error-100)',
					200: 'var(--error-200)',
					300: 'var(--error-300)',
					400: 'var(--error-400)',
					500: 'var(--error-500)',
					600: 'var(--error-600)',
					700: 'var(--error-700)',
					800: 'var(--error-800)',
					900: 'var(--error-900)',
				},
				surface: {
					DEFAULT: 'var(--surface)',
					foreground: 'var(--surface-foreground)',
					elevated: 'var(--surface-elevated)',
					'elevated-foreground': 'var(--surface-elevated-foreground)',
				},
				border: 'var(--border)',
				input: 'var(--input)',
				ring: 'var(--ring)',
				background: 'var(--background)',
				foreground: 'var(--foreground)',
				destructive: {
					DEFAULT: 'var(--destructive)',
					foreground: 'var(--destructive-foreground)'
				},
				muted: {
					DEFAULT: 'var(--muted)',
					foreground: 'var(--muted-foreground)'
				},
				accent: {
					DEFAULT: 'var(--accent)',
					foreground: 'var(--accent-foreground)'
				},
				popover: {
					DEFAULT: 'var(--popover)',
					foreground: 'var(--popover-foreground)'
				},
				card: {
					DEFAULT: 'var(--card)',
					foreground: 'var(--card-foreground)'
				},
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(10px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fade-out': {
					'0%': {
						opacity: '1',
						transform: 'translateY(0)'
					},
					'100%': {
						opacity: '0',
						transform: 'translateY(10px)'
					}
				},
				'slide-in-right': {
					'0%': { transform: 'translateX(100%)' },
					'100%': { transform: 'translateX(0)' }
				},
				'slide-out-right': {
					'0%': { transform: 'translateX(0)' },
					'100%': { transform: 'translateX(100%)' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.3s ease-out',
				'fade-out': 'fade-out 0.3s ease-out',
				'slide-in-right': 'slide-in-right 0.3s ease-out',
				'slide-out-right': 'slide-out-right 0.3s ease-out'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
