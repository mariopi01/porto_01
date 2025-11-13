// import type { Config } from "tailwindcss"

// const config = {
//   darkMode: ["class"],
//   content: [
//     './pages/**/*.{ts,tsx}',
//     './components/**/*.{ts,tsx}',
//     './app/**/*.{ts,tsx}',
//   ],
//   prefix: "",
//   theme: {
//     container: {
//       center: true,
//       padding: "2rem",
//       screens: {
//         "2xl": "1400px",
//       },
//     },
//     extend: {
//       // 1. Warna kustom dari proyek asli Anda
//       colors: {
//         primary: '#3b82f6', // Blue-500
//         secondary: '#60a5fa', // Blue-400
//         darkBg: '#1f2937', // Gray-800
//         lightBg: '#f9fafb', // Gray-50
//         darkText: '#111827', // Gray-900
//         lightText: '#f9fafb', // Gray-50
        
//         // 2. Warna ShadCN UI (dihasilkan oleh 'init')
//         border: "hsl(var(--border))",
//         input: "hsl(var(--input))",
//         ring: "hsl(var(--ring))",
//         background: "hsl(var(--background))",
//         foreground: "hsl(var(--foreground))",
//         // ... (warna shadcn lainnya)
//       },
//       // 3. Keyframes dari proyek asli ANDA + ShadCN
//       keyframes: {
//         // ShadCN Keyframes
//         "accordion-down": {
//           from: { height: "0" },
//           to: { height: "var(--radix-accordion-content-height)" },
//         },
//         "accordion-up": {
//           from: { height: "var(--radix-accordion-content-height)" },
//           to: { height: "0" },
//         },
        
//         // Keyframes Asli Anda
//         "fade-in-up": {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//         "slide-in-left": {
//           "0%": { opacity: "0", transform: "translateX(-20px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         "slide-in-right": {
//           "0%": { opacity: "0", transform: "translateX(20px)" },
//           "100%": { opacity: "1", transform: "translateX(0)" },
//         },
//         "scale-in": {
//           "0%": { opacity: "0", transform: "scale(0.9)" },
//           "100%": { opacity: "1", transform: "scale(1)" },
//         },
//         "stagger-fade-in": {
//           "0%": { opacity: "0", transform: "translateY(20px)" },
//           "100%": { opacity: "1", transform: "translateY(0)" },
//         },
//       },
//       // 4. Animasi dari proyek asli ANDA + ShadCN
//       animation: {
//         // ShadCN Animations
//         "accordion-down": "accordion-down 0.2s ease-out",
//         "accordion-up": "accordion-up 0.2s ease-out",

//         // Animasi Asli Anda
//         "fade-in-up": "fade-in-up 0.6s ease-out",
//         "slide-in-left": "slide-in-left 0.6s ease-out",
//         "slide-in-right": "slide-in-right 0.6s ease-out",
//         "scale-in": "scale-in 0.5s ease-out",
//         "stagger-fade-in": "stagger-fade-in 0.8s ease-out forwards",
//       },
//     },
//   },
//   plugins: [require("tw-animate-css")],
// } satisfies Config

// export default config


import type { Config } from "tailwindcss"
import defaultTheme from "tailwindcss/defaultTheme" // PERBAIKAN 1: Menggunakan import



const config = {
  darkMode: "class", // PERBAIKAN 3: Menggunakan string, bukan array
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        // Menggunakan defaultTheme dari import
        sans: ["var(--font-raleway)", ...defaultTheme.fontFamily.sans], 
        heading: ["var(--font-mulish)", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        primary: '#3b82f6',
        secondary: '#60a5fa',
        darkBg: '#1f2937',
        lightBg: '#f9fafb',
        darkText: '#111827',
        lightText: '#f9fafb',
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],

} satisfies Config

export default config