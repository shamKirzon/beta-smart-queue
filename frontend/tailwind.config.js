/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./screens/**/*.{js,jsx,ts,tsx}"
            
  ],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {fontSize: {
      "10xl": "40rem"
    }},
  },
  plugins: [],
}

