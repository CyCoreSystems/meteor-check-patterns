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

// FloatString
Tinytest.add('ulexus:check-patterns-tests - FloatString', function(test) {
   var pat = Match.FloatString;
   test.throws(function() {
      check(undefined,pat);
   },/Match error/);
   test.throws(function() {
      check('',pat);
   },/Match error/);
   test.throws(function() {
      check('Alpha',pat);
   },/Match error/);
   test.isUndefined(check('911',pat));
   test.isUndefined(check('911.111',pat));
   test.isUndefined(check('911e11',pat));
   test.isUndefined(check('010',pat));
   test.isUndefined(check('-010',pat));
   test.isUndefined(check('-010.842',pat));
});

// IntString
//   Note:  at present, these are effectively the same as FloatString
//     Perhaps there is a difference between the two which may be discovered
//     in the future?
Tinytest.add('ulexus:check-patterns-tests - IntString', function(test) {
   var pat = Match.IntString;
   test.throws(function() {
      check(undefined,pat);
   },/Match error/);
   test.throws(function() {
      check('',pat);
   },/Match error/);
   test.throws(function() {
      check('Alpha',pat);
   },/Match error/);
   test.isUndefined(check('911',pat));
   test.isUndefined(check('911.111',pat));
   test.isUndefined(check('911e11',pat));
   test.isUndefined(check('010',pat));
   test.isUndefined(check('-010',pat));
   test.isUndefined(check('-010.842',pat));
});

// NumberPositive
Tinytest.add('ulexus:check-patterns-tests - NumberPositive', function(test) {
   var pat = Match.NumberPositive;
   test.throws(function() {
      check(undefined,pat);
   },/Match error/);
   test.throws(function() {
      check('',pat);
   },/Match error/);
   test.throws(function() {
      check('Alpha',pat);
   },/Match error/);
   test.throws(function() {
      check('0',pat);
   },/Match error/);
   test.throws(function() {
      check(0,pat);
   },/Match error/);
   test.throws(function() {
      check('-1',pat);
   },/Match error/);
   test.throws(function() {
      check(-1,pat);
   },/Match error/);
   test.throws(function() {
      check('-1.1',pat);
   },/Match error/);
   test.throws(function() {
      check(-1.1,pat);
   },/Match error/);
   test.isUndefined(check('911',pat));
   test.isUndefined(check(911,pat));
   test.isUndefined(check('911.111',pat));
   test.isUndefined(check(911.111,pat));
   test.isUndefined(check('911e11',pat));
   test.isUndefined(check(911e11,pat));
   test.isUndefined(check('010',pat));
   test.isUndefined(check(010,pat));
   test.isUndefined(check('0.10',pat));
   test.isUndefined(check(0.10,pat));
});

// Email
Tinytest.add('ulexus:check-patterns-tests - Email', function(test) {
   var pat = Match.Email;
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
      check('a@blah',pat);
   },/Match error/);
   test.isUndefined(check('test@testco.com',pat));
   test.isUndefined(check('test@sub.testco.com',pat));
   test.isUndefined(check('test@sub.sub.testco.com',pat));
   test.isUndefined(check('t8459.electrose@sub.sub.testco.com',pat));
   test.isUndefined(check('45_82+cg.hg_wells@sub.sub.testco.com',pat));
});

// PhoneNANPA
Tinytest.add('ulexus:check-patterns-tests - PhoneNANPA', function (test) {
   var pat = Match.PhoneNANPA;
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

