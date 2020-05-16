# typescript-stat

npm init -y
tsc --init
npm install nodemon concurrently

anytime you want to get the type definition for any node module (fs, http, os), you have to npm install @types/node

## Enums

- follow near-identical syntax rules as normal objects
- creates an object with the same keys and values when converted from TS to JS
- primary goal is to signal to other engineers that these are all closely related values
- use whenever you have a small fixed set of values that are all closely related and known at compile time

## Generics

- like function arguments, but for types in class/function definition
- allows us to define the type of a property/argument/return value at a future point
- used heavily when writing reusable code
  `<T>` is a reference to a generic type. This of it like `<TypeOfData>` you can name it whatever you would like.

## Inheritance vs. Composition

#### which was better for this project?

_inheritance_: characterized by an 'is a' relationship between two classes. ex. MatchReader is a CsvFileReader.
_composition_: characterized by a 'has a' relationship between two classes. ex. MatchReader has a reference to an outside object, like the CsvFileReader.
