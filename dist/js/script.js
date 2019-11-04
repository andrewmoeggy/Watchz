var ghpages = require('gh-pages');

ghpages.publish('dist',
  {
    branch: 'master',
    repo: 'https://github.com/andrewmoeggy/Watchz.git'
  });