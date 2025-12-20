// Tailwind Configuration
tailwind.config = {
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#33f20d", // Current neon green
                "primary-hover": "#2bd90b",
                "background-light": "#f6f8f5",
                "background-dark": "#14532d", // Changed from #132210 (almost black) to a more distinct Dark Green
                "surface-light": "#ffffff",
                "surface-dark": "#166534",    // Changed from #1a2c15
                "card-bg-light": "#ffffff",
                "card-bg-dark": "#166534",    // Changed from #1a2c15
                "text-main-light": "#121811",
                "text-sub-light": "#678a60",
                "text-main-dark": "#f0fdf4",  // Lighter, minty white for text on green
                "text-sub-dark": "#bbf7d0",  // Light green mixture with white for subtext
            },
            fontFamily: {
                "display": ["Plus Jakarta Sans", "sans-serif"],
                "body": ["Noto Sans", "sans-serif"],
            },
            borderRadius: { "DEFAULT": "0.25rem", "md": "0.375rem", "lg": "0.5rem", "xl": "0.75rem", "2xl": "1.5rem", "full": "9999px" },
        },
    },
};

// Mobile Menu Interactivity
document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const closeMenuBtn = document.getElementById('close-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuBtn && closeMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
        });

        closeMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.add('translate-x-full');
            document.body.style.overflow = '';
        });

        const menuLinks = mobileMenu.querySelectorAll('a');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = '';
            });
        });
    }
});
