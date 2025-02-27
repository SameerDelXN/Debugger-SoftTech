/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://www.debuggersofttech.com/', // Replace with your URL
  generateRobotsTxt: true, // Generate robots.txt
  sitemapSize: 5000, // Optional: Max URLs in one sitemap
  changefreq: 'daily', // Change frequency of pages
  priority: 0.7, // Default page priority
};
