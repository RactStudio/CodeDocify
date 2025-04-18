/** @type {import('tailwindcss').Config} */
module.exports = {
    prefix: 'codo-', // Custom prefix for Tailwind classes
    content: [
      './src/**/*.js',
      './src/**/*.html',
      './src/**/*.twig',
      './public/**/*.html',
    ],
    theme: {
      extend: {},
    },
    plugins: [],
  };