tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                wine: {
                    DEFAULT: '#721C24',
                    dark: '#4A1116',
                    light: '#8F262F'
                },
                cream: {
                    DEFAULT: '#F4ECE1', // Novo bege levemente mais escuro e elegante
                    dark: '#E6DCCF'     // Bordas ajustadas para acompanhar o novo fundo
                },
                gold: {
                    DEFAULT: '#D4AF37',
                    dark: '#AA8C2C'
                },
                charcoal: '#2A2A2A'
            },
            fontFamily: {
                serif: ["Libre Caslon Text", "serif"],
                sans: ["Work Sans", "sans-serif"],
            },
            animation: {
                'fade-up': 'fadeUp 1s ease-out forwards',
                'float': 'float 4s ease-in-out infinite',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(25px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-8px)' },
                }
            }
        }
    }
};