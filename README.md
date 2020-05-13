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
- used heavily when writing reusable ode 