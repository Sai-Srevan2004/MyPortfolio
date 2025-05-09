/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ["class"],
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  	extend: {
  		animation: {
  			float: 'float 3s ease-in-out infinite',
  			waveSlide: 'waveSlide 1.5s ease-in-out forwards',
  			waveSlideDelay: 'waveSlide 1.5s ease-in-out 0.3s forwards',
  			waveSlideDelay2: 'waveSlide 1.5s ease-in-out 0.6s forwards',
  			waveSlideDelay3: 'waveSlide 1.5s ease-in-out 0.9s forwards',
  			waveSlideDelay4: 'waveSlide 1.5s ease-in-out 1.2s forwards',
  			revealCenter: 'revealCenter 2s ease-in-out forwards'
  		},
  		keyframes: {
  			float: {
  				'0%, 100%': {
  					transform: 'translateY(0px)'
  				},
  				'50%': {
  					transform: 'translateY(-10px)'
  				}
  			},
  			waveSlide: {
  				'0%': {
  					opacity: 0,
  					transform: 'translateX(-50px)'
  				},
  				'50%': {
  					opacity: 0.5,
  					transform: 'translateX(0px)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'translateX(10px)'
  				}
  			},
  			revealCenter: {
  				'0%': {
  					opacity: 0,
  					transform: 'scale(0.5)'
  				},
  				'100%': {
  					opacity: 1,
  					transform: 'scale(1)'
  				}
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
