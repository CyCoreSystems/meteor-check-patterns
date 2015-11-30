// NonEmptyString makes sure the input is a string
// of non-zero length
Match.NonEmptyString = Match.Where(function(x) {
   check(x, String);
   return x.length > 0;
});

// FloatString makes sure the input is a string which
// can be parsed into a float without error
Match.FloatString = Match.Where(function(x) {
   check(x, String);
   return isNaN(parseFloat(x)) == false;
});

// IntString makes sure the input is a string which
// can be parsed into an integer without error
Match.IntString = Match.Where(function(x) {
   check(x, String);
   return isNaN(parseInt(x)) == false;
});

// NumberPositive makes sure the input can be parsed
// as a positive number (>0)
Match.NumberPositive = Match.Where(function(x) {
   var num = parseFloat(x);
   if( isNaN(num) ) {
      return false;
   }
   if( num <= 0 ) {
      return false;
   }
   return true;
});

// Email makes sure the input matches the
// form of an email address
// (Stolen from http://www.regular-expressions.info/email.html)
Match.Email = Match.Where(function(x) {
   check(x, String);

   // Trim whitespace
   var stripped = String(x).trim();

   if(stripped.match(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i)) {
      return true;
   }
   throw new Meteor.Error(400,"Match error: Invalid email regex");
});

// PhoneNANPA makes sure the input matches the form
// NXX-NXX-XXXX (with or without dashes, with or without a leading 1)
Match.PhoneNANPA = Match.Where(function(x) {
   check(x, String);

   // Strip all non-numeric numbers
   var stripped = String(x).replace(/[^+0-9]/g, '');

   // If we were given a +1 prefix, strip it
   stripped = stripped.replace(/^\+1/,'');

   // If we were given a 0111 prefix, strip it
   stripped = stripped.replace(/^0111/,'');

   // Verify the length is 10 digits
   if( stripped.length != 10 ) {
      // Allow for leading 1 (NANPA country code)
      if( stripped.length != 11 ) {
         throw new Meteor.Error(400,"Match error: Incorrect length");
      }
      if( stripped.charAt(0) != '1' ) {
         throw new Meteor.Error(400,"Match error: Incorrect length");
      } else {
         // Pop the '1' off the front
         stripped = stripped.replace(/^1/,'');
      }
   }

   // Verify the first and fourth digits are not '0' or '1'
   if( stripped.charAt(0) == '0' || stripped.charAt(0) == '1' ||
       stripped.charAt(3) == '0' || stripped.charAt(3) == '1' ) {
      throw new Meteor.Error(400,"Match error: Non-conforming number");
   }

   return true;
});
