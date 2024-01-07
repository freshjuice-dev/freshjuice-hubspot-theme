module.exports = {
  plugins: [
    require("postcss-easy-import"),
    require("postcss-discard-comments")({removeAll: true}),
    require("tailwindcss/nesting"),
    require("tailwindcss"),
    require("autoprefixer"),
    require("postcss-merge-rules"),
    require("postcss-replace")({
      pattern: /(--tw|\*, ::before, ::after)/g,
      data: {
        '--tw': '--fj', // Prefixing
        '*, ::before, ::after': ':root' // So variables does not pollute every element
      }
    }),
    // require('@fullhuman/postcss-purgecss')({
    // 	// Content files referencing CSS classes
    // 	content: [
    // 		"./_site/**/*.html",
    // 		"./_site/**/*.js"
    // 	],
    //
    // 	// CSS files to be purged in-place
    // 	css: ["./_site/**/*.css"],
    //
    // 	// Preserve tailwind responsive classes
    // 	// defaultExtractor: (content) => content.match(/[\w-/:]+(?<!:)/g) || [],
    // 	defaultExtractor: (content) => content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [],
    //
    // 	safelist: {
    // 		greedy: [],
    // 	},
    // })
  ],
};
