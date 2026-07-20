import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          primary: '#0b5cd4',
          hover: '#0a4bad',
          hover2: '#2a6fe0',
          tint: '#eef4fe',
        },
        text: {
          primary: '#1d1d1f',
          secondary: '#4a4a4f',
          tertiary: '#6e6e73',
          muted: '#86868b',
          placeholder: '#a1a1a6',
        },
        surface: {
          bg: '#ffffff',
          soft: '#fafafc',
          fill: '#f5f5f7',
          subtle: '#f0f0f3',
        },
        border: {
          light: '#e8e8ed',
          lighter: '#e0e0e5',
          lighter2: '#ececf0',
          lighter3: '#d2d2d7',
        },
        dark: {
          primary: '#1d1d1f',
          secondary: '#1a2537',
          tertiary: '#26262b',
        },
        error: {
          primary: '#d70015',
        },
        success: {
          primary: '#1a7f37',
          bg: '#e7f2e9',
        },
        icon: {
          muted: '#c7c7cc',
        }
      },
      fontFamily: {
        sans: ['var(--font-cabin)', '-apple-system', 'BlinkMacSystemFont', '"Segoe UI"', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        xs: ['13px', { lineHeight: '1.4' }],
        sm: ['14px', { lineHeight: '1.4' }],
        base: ['15px', { lineHeight: '1.4' }],
        lg: ['16px', { lineHeight: '1.45' }],
        xl: ['17px', { lineHeight: '1.45' }],
        '2xl': ['18px', { lineHeight: '1.45' }],
        '3xl': ['19px', { lineHeight: '1.4' }],
        '4xl': ['20px', { lineHeight: '1.55' }],
        '5xl': ['22px', { lineHeight: '1.5' }],
        '6xl': ['24px', { lineHeight: '1.55' }],
        '7xl': ['26px', { lineHeight: '1.4' }],
        '8xl': ['28px', { lineHeight: '1.4' }],
        hero: 'clamp(34px, 5.2vw, 62px)',
      },
      borderRadius: {
        pill: '980px',
        input: '12px',
        card: '14px',
        lg: '18px',
        xl: '20px',
        '2xl': '22px',
      },
      boxShadow: {
        dropdown: '0 18px 50px rgba(0, 0, 0, 0.14)',
        'card-hover': '0 14px 34px rgba(0, 0, 0, 0.1)',
        'form-card': '0 6px 24px rgba(0, 0, 0, 0.04)',
        'mobile-panel': '-20px 0 60px rgba(0, 0, 0, 0.2)',
        'device-toggle': '0 8px 28px rgba(0, 0, 0, 0.16)',
      },
      letterSpacing: {
        tight: '-0.02em',
        wide: '0.04em',
        wider: '0.08em',
        widest: '0.12em',
        uppercase: '0.14em',
      },
      animation: {
        shine: 'shine 1.4s ease infinite',
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
