const moment = require('moment');
const fs = require("fs");

module.exports = eleventyConfig => {

  eleventyConfig.setDataDeepMerge(true);

  eleventyConfig.setBrowserSyncConfig({
    callbacks: {
      ready: function(err, bs) {

        bs.addMiddleware("*", (req, res) => {
          const content_404 = fs.readFileSync('dist/404.html');
          // Add 404 http status code in request header.
          res.writeHead(404, { "Content-Type": "text/html; charset=UTF-8" });
          // Provides the 404 content without redirect.
          res.write(content_404);
          res.end();
        });
      }
    }
  });

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
