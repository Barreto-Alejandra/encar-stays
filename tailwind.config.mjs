/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'fluid-h1': 'clamp(2rem, 4vw + 1rem, 3.5rem)', 
				'fluid-h2': 'clamp(1.5rem, 3vw + 1rem, 2.5rem)',
				'fluid-body': 'clamp(1rem, 0.5vw + 0.8rem, 1.125rem)',
			},
			colors: {
				primary: '#0ea5e9',
				dark: '#0f172a',
			},
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
		},
	},
	plugins: [],
}