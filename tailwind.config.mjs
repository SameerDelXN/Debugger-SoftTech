/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        phone: {'min':'320px','max':'767px'},
        tablet: { 'min': '768px', 'max': '1024px' }, // Tablets and small laptops
        laptop: {'min':'1025px','max':'1367px'},
        // desktop: {'min':'1281px','max':'1366px'},
        desktopxl: {'min':'1368px','max':'2560px'},
        // desktop2xl: {'min':'1921px','max':'2560px'},
        desktop3xl: {'min':'2561px','max':'3840px'},
    },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
