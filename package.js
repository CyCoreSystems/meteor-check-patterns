Package.describe({
  summary: "Various patterns useful with the 'check' command",
  version: "0.0.3",
  git: "https://github.com/CyCoreSystems/meteor-check-patterns.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1.1');
  api.use('check');
  api.export('Patterns');
  api.addFiles('ulexus:check-patterns.js');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('ulexus:check-patterns');
  api.addFiles('ulexus:check-patterns-tests.js');
});
