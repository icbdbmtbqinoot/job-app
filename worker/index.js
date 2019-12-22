const CronJob = require('cron').CronJob;
const fetchGithub = require('./tasks/fetch-github');

// Get github job list
new CronJob(' * * * * *', fetchGithub, null, true, 'America/Los_Angeles');