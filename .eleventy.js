const moment = require('moment');
const cacheBuster = require('@mightyplow/eleventy-plugin-cache-buster');

module.exports = eleventyConfig => {

  const cacheBusterOptions = {
    outputDirectory: 'dist'
  };
  eleventyConfig.addPlugin(cacheBuster(cacheBusterOptions));

  eleventyConfig.addFilter('permalink', str => {
    return str.replace(/\.html/g, '')
  });

  eleventyConfig.addFilter("date", function(value) {
    return moment(value).format('D MMMM YYYY');
  });

  eleventyConfig.addFilter('strip_html', str => {
    return str.replace(
      /<script.*?<\/script>|<!--.*?-->|<style.*?<\/style>|<.*?>/g,
      ''
    )
  });

  eleventyConfig
  .addPassthroughCopy('src/assets/fonts/')
  // .addPassthroughCopy('src/assets/images/')
  .addPassthroughCopy('src/manifest.json')

  return {
    templateFormats: ['njk', 'md', 'html', 'png', 'ico', 'svg', 'xml', 'jpg'],
    dir: {
      input: 'src',
      includes: '_includes',
      data: '_data',
      output: 'dist'
    },
    markdownTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    passthroughFileCopy: true
  }
}
