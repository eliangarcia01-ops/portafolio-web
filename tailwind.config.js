/** @type {import('tailwindcss').Config} */
module.exports = {
content: ["./*.html"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "surface-container": "#1f1f1f",
        "background": "#0a0a0a",
        "surface": "#131313",
        "on-surface-variant": "#888888",
        "on-surface": "#f5f5f5",
        "primary-container": "#FF5E00", 
      },
      spacing: {
        "section-gap": "160px",
        "margin-mobile": "24px",
        "gutter": "32px",
        "container-max": "1440px",
        "margin-desktop": "80px"
      },
      fontFamily: {
        "headline-lg": ["Syne", "sans-serif"],
        "display-xl": ["Syne", "sans-serif"],
        "headline-lg-mobile": ["Syne", "sans-serif"],
        "body-md": ["Inter", "sans-serif"],
        "label-caps": ["Space Grotesk", "sans-serif"]
      },
      fontSize: {
        "headline-lg": ["64px", { lineHeight: "72px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "display-xl": ["120px", { lineHeight: "110px", letterSpacing: "-0.04em", fontWeight: "800" }],
        "headline-lg-mobile": ["40px", { lineHeight: "44px", letterSpacing: "-0.02em", fontWeight: "700" }],
        "body-md": ["16px", { lineHeight: "24px", letterSpacing: "0em", fontWeight: "400" }],
        "label-caps": ["12px", { lineHeight: "16px", letterSpacing: "0.1em", fontWeight: "600" }]
      }
    }
  },
  plugins: [],
}