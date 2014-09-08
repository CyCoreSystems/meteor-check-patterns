// NonEmptyString
Tinytest.add('ulexus:check-patterns-tests - NonEmptyString', function (test) {
   test.throws(function() {
      check(undefined,Match.NonEmptyString);
   },/Match error/);
   test.throws(function() {
      check('',Match.NonEmptyString)
   },/Match error/);
   test.isUndefined(check('Alpha',Match.NonEmptyString));
});


// PhoneNANPA
Tinytest.add('ulexus:check-patterns-tests - PhoneNANPA', function (test) {
   pat = Match.PhoneNANPA;
   test.throws(function() {
      check(undefined,pat);
   },/Match error/);
   test.throws(function() {
      check('',pat)
   },/Match error/);
   test.throws(function() {
      check('Alpha',pat);
   },/Match error/);
   test.throws(function() {
      check('911',pat);
   },/Match error/);
   test.throws(function() {
      check('+43 241 88020',pat);
   },/Match error/);
   test.throws(function() {
      check('011 43 241 88020',pat);
   },/Match error/);
   test.isUndefined(check('(404) 555-5555',pat));
   test.isUndefined(check('1 (404) 555-5555',pat));
   test.isUndefined(check('+1 (404) 555-5555',pat));
   test.isUndefined(check('011 1 (404) 555-5555',pat));
   test.isUndefined(check('011 1 (404) 555-5555',pat));
   test.isUndefined(check('404.555.5555',pat));
   test.isUndefined(check('404-555-5555',pat));
});

