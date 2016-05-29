# text-transform-cli
A collection of CLI tools to operate simple text transformations.

For those how have to pass from camel to snake case 10+ times a day, and all this kind of small text operation that makes a developer's daily routine.

Example:
```sh
$ snake myNewFunctionName
# => outputs 'my_new_function_name' and copy it to your clipboard
```

## Installation
```
npm install -g text-transform-cli
```
:warning: this will add several un-namespaced new [commands](#commands) to your PATH, some would consider it "polluting", but using those 10+ times a day, I consider that it's totally worth it. But that's just my use case.

## Commands

### Lodash functions wrappers
The following commands are direct wrappers of [Lodash](http://lodash.com) functions, made directly available from your terminal

#### camel
*see lodash [camelCase](http://lodash.com/docs#camelCase)*
#### kebab
*see lodash [kebabCase](http://lodash.com/docs#kebabCase)*
#### snake
*see lodash [snakeCase](http://lodash.com/docs#snakeCase)*
#### capitalize
*see lodash  [capitalize](http://lodash.com/docs#capitalize)*
#### lowercase
*see lodash  [lowercase](http://lodash.com/docs#lowerCase)*
#### uppercase
*see lodash  [uppercase](http://lodash.com/docs#upperCase)*

### Others
#### reverse
```sh
$ reverse hello
# => olleh
$ reverse hello world
# => world hello
```
