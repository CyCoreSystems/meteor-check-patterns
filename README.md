Check patterns for Meteor's `check` package
============

Various check patterns attached to Meteor's Match object.  These may be used as the second argument to Meteor's `check` function.

Example:

`check(myFormInput,Match.NonEmptyString)`

## Patterns available

### `Match.NonEmptyString`

Checks that:
1. the input is a string
2. that it is non-zero in length


### `Match.PhoneNANPA`

Checks that:
1. the input is a string
2. that it is of the form NXX-NXX-XXXX (dashes,dots,leading '1' insignificant)

