/**
 * PostCSS config for the MysticJS Design System.
 */

module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {
      ...(process.env.NODE_ENV === 'production' ? { cssnano: {} } : {}), // minify styles in production
    },
  },
};
