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
```sh
$ camel helloWorld_What is happening-Today
# => helloWorldWhatIsHappeningToday
```
*see lodash [camelCase](http://lodash.com/docs#camelCase)*

#### kebab
```sh
$ kebab helloWorld_What is happening-Today
# => hello-world-what-is-happening-today
```
*see lodash [kebabCase](http://lodash.com/docs#kebabCase)*

#### snake
```sh
$ snake helloWorld_What is happening-Today
# => hello_world_what_is_happening_today
```
*see lodash [snakeCase](http://lodash.com/docs#snakeCase)*

#### capitalize
```sh
$ capitalize helloWorld_What is happening-Today
# => Helloworld_what is happening-today
```
*see lodash  [capitalize](http://lodash.com/docs#capitalize)*

#### lowercase
```sh
$ lowercase helloWorld_What is happening-Today
# => hello world what is happening today
```
*see lodash  [lowercase](http://lodash.com/docs#lowerCase)*

#### uppercase
```sh
$ uppercase helloWorld_What is happening-Today
# => HELLO WORLD WHAT IS HAPPENING TODAY
```
*see lodash  [uppercase](http://lodash.com/docs#upperCase)*


### Others
#### length
```sh
$ length gloubiboulga
# => 12
```

#### reverse
```sh
$ reverse hello
# => olleh
$ reverse hello world
# => world hello
```
