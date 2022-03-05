# text-transform-cli
A collection of CLI commands to operate frequently needed text transformations

For those who have to pass from camel to snake case 10+ times a day, and all this kind of small text operation that makes a developer's daily routine. (Note that, for the most frequent case conversions, [there is probably a plugin to do that directly from your text editor](#see-also))

Quick examples:
```sh
# Transforming text passed as arguments
snake myNewFunctionName
# => outputs 'my_new_function_name' and copy it to your clipboard

# Transforming text passed on stdin
cat somefile | uppercase > somefile_uppercased
```

## Summary

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [Installation](#installation)
- [Changelogs](#changelogs)
- [Commands](#commands)
  - [Case manipulation](#case-manipulation)
    - [camel](#camel)
    - [pascal](#pascal)
    - [kebab](#kebab)
    - [snake](#snake)
    - [colon](#colon)
    - [capitalize](#capitalize)
    - [startcase](#startcase)
    - [lowercase](#lowercase)
    - [uppercase](#uppercase)
    - [randomcase](#randomcase)
  - [Script level](#script-level)
    - [superscript](#superscript)
    - [subscript](#subscript)
  - [Encoding](#encoding)
    - [urlencode](#urlencode)
    - [urldecode](#urldecode)
    - [htmlencode](#htmlencode)
    - [htmldecode](#htmldecode)
    - [unicode](#unicode)
  - [Misc](#misc)
    - [length](#length)
    - [reverse](#reverse)
    - [reversewords](#reversewords)
    - [zalgo](#zalgo)
      - [size](#size)
      - [position](#position)
      - [ease](#ease)
- [Options](#options)
  - [Disable copy to clipboard](#disable-copy-to-clipboard)
- [See also](#see-also)
- [License](#license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Installation
```
npm install -g text-transform-cli
```
:warning: this will add several un-namespaced new [commands](#commands) to your PATH, some would consider it "polluting", but using those 10+ times a day, I consider that it's totally worth it. But that's just my use case.

## [Changelogs](https://github.com/maxlath/text-transform-cli/blob/master/CHANGELOG.md#changelog)

## Commands

### Case manipulation

#### camel
```sh
camel helloWorld_What is happening-Today
# => helloWorldWhatIsHappeningToday
```

#### pascal
```sh
pascal helloWorld_What is happening-Today
# => HelloWorldWhatIsHappeningToday
```

#### kebab
```sh
kebab helloWorld_What is happening-Today
# => hello-world-what-is-happening-today
```

#### snake
```sh
snake helloWorld_What is happening-Today
# => hello_world_what_is_happening_today
```

#### colon
```sh
colon helloWorld_What is happening-Today
# => hello:world:what:is:happening:today
```

#### capitalize
```sh
capitalize helloWorld_What is happening-Today
# => Helloworld_what is happening-today
```

#### startcase
```sh
startcase helloWorld_What is happening-Today
# => Hello World What Is Happening Today
```

#### lowercase
```sh
lowercase helloWorld_What is happening-Today
# => hello world what is happening today
```

#### uppercase
```sh
uppercase helloWorld_What is happening-Today
# => HELLO WORLD WHAT IS HAPPENING TODAY
```

#### randomcase
```sh
randomcase helloWorld_What is happening-Today
# => hElloWorlD_WHaT Is HAppEniNG-tOdAy
```

### Script level
#### superscript
```sh
superscript hello 12(3)4=5
# => ʰᵉˡˡᵒ ¹²⁽³⁾⁴⁼⁵
printf '5.123*10' ; superscript 5 --no-cb
# => 5.123*10⁵%
```
NBSome characters won't be converted as they aren't defined in Unicode

#### subscript
```sh
subscript hello 12(3)4=5
# => ₕₑₗₗₒ ₁₂₍₃₎₄₌₅
printf 'H' ; subscript 2 --no-cb ; printf 'O'
# => H₂O
```
NB: Some characters won't be converted as they aren't defined in Unicode

### Encoding
#### urlencode
```sh
urlencode https://en.wikipedia.org/wiki/Minister_for_Māori_Development
# => https://en.wikipedia.org/wiki/Minister_for_M%C4%81ori_Development
urlencode --component https://en.wikipedia.org/wiki/Minister_for_Māori_Development
# => https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FMinister_for_M%C4%81ori_Development
```

#### urldecode
```sh
urldecode https%3A%2F%2Finventaire.io%2Fentity%2Fwd%3AQ315910
# => https://inventaire.io/entity/wd:Q315910
```

#### htmlencode
```sh
htmlencode "'HMAC-SHA256' & 'HMAC-SHA1'"
# => &apos;&#x48;&#x4d;&#x41;&#x43;&#x2d;&#x53;&#x48;&#x41;&#x32;&#x35;&#x36;&apos;&nbsp;&amp;&nbsp;&apos;&#x48;&#x4d;&#x41;&#x43;&#x2d;&#x53;&#x48;&#x41;&#x31;&apos;
```

#### htmldecode
```sh
htmldecode '&#039;HMAC-SHA256&#039; &amp; &#039;HMAC-SHA1&#039;'
# => 'HMAC-SHA256' & 'HMAC-SHA1'
```

#### unicode
Get the UTF-16 codes for a given string
```sh
unicode 'zàéä'
# => \u007a\u00e0\u00e9\u00e4
```

### Style
#### boldsans
```sh
boldsans yolo
# => 𝘆𝗼𝗹𝗼
```

#### boldserif
```sh
boldserif yolo
# => 𝐲𝐨𝐥𝐨
```

#### bolditalicsans
```sh
bolditalicsans yolo
# => 𝙮𝙤𝙡𝙤
```

#### bolditalicserif
```sh
bolditalicserif yolo
# => 𝒚𝒐𝒍𝒐
```

#### gothic
```sh
gothic yolo
# => 𝔶𝔬𝔩𝔬
```

#### gothicbold
```sh
gothicbold yolo
# => 𝖞𝖔𝖑𝖔
```

#### italicsans
```sh
italicsans yolo
# => 𝘺𝘰𝘭𝘰
```

#### italicserif
```sh
italicserif yolo
# => 𝑦𝑜𝑙𝑜
```

#### monospace
```sh
monospace yolo
# => 𝚢𝚘𝚕𝚘
```

#### strike
```sh
strike yolo
# => ̶y̶o̶l̶o
```

#### underline
```sh
underline yolo
# => ̲y̲o̲l̲o
```

#### upsidedown
```sh
upsidedown yolo
# => ʎoןo
```

### Misc
#### length
```sh
length gloubiboulga
# => 12
```

#### reverse
```sh
reverse hello
# => olleh
reverse hello world
# => dlrow olleh
```

#### reversewords
```sh
reversewords hello
# => hello
reversewords hello world
# => world hello
```

#### zalgo
```sh
zalgo Lorem ipsum dolor sit amet
```
L̶̨̫̙͕͈͖͖̱̰̼̠͑̋̾ͯ̈̅ͤ͆͛̐́o̴̘͖̣̝̟͙̰̰̥͍͋̃ͣͤͯ̿͊̓̃̏̀͢r̜̥͔̺̩͔̖̣͙ͥ͌̾̉̽̈́̿ͧ̅͞ͅ ҉͢ę̨̢̯̖̺̣̜̻̳̘͍̐̅͌ͥͯ͂̔ͯͭ͊ͅm̹͓̺̼̗͉̟̙͚̙͑͐́ͯ͗͗́̔͐̉ ҉̴͡ ̵͚̙̩̬̫͉̼̻̤̯ͤ́͋͂̃̉̓̒ͦ̀̕͝i̡̛̤̩̦̱͖̻̥̫͍ͦ̓͋̿̊̑͒̔ͫ̎̀ͅp̛̞̮̪̩͖͖̳̪̜͔̀̉ͪ̑̄̇́̾̽̒͘͠s͍͙̭͕̹̜̤̣͕̺̐̊ͥ̉ͥ̈ͩ̅̉̀͝͞͠ṷ̸̶̺̦̝̺͇͎̘̙̮̂ͤͬͩ̄̈ͫ̓̐ͥ̕m̵̩̮̖͎͕͈̯͕͍̟̌ͨ͌̉̽͂̂̈̇̚͜͠ ̶̗̙̦͉̺̺̫͕͖̮̆ͤ͊̽̅͋ͫͫ̓̚͢͞d̛̰͓̘̣̹̪̤̥̥͔ͩ̊̇̒ͧ̔ͦͪͦͭ͞͞ǫ̷̯̟̼̼̯̯̲̪͕͉̀̇́̃ͩͤͮ̇͑ͭ͝ļ̵̹̫̱͕̯͙̠͇̱̜̎̽ͫ͐̇̿̃ͭͪͬ͠o̶̷̼̼͓̜̣̥̪͈͉̝͑ͫ̋̑̊͑̒͒ͫ̎́ŗ̥̬̝̝͍̱̲̲̙̅̽ͫͨ̃ͩ̓̋ͤ̋͘͜ͅ ̨̻͕̳͍̝̟͚͖͖̱͐̍̄͌̑̍͆͛̄̚͢͝ș̵̨̛͕̦̙̗̖̬̱͉͎͗̐͑̓ͤ̏ͨ̍͊̿i̧̛̞̼̯̻̤̖̜̙̹̺ͦ̌ͭͧ̄́̾͐̓̚͠t̷̘̭̬͇͓̯̮̗̹̞̐ͥ̋̑̏͒̏̌͑̎͘͘ ̷̠̗̹̝͈͍̰̱͚͇̓̂ͫͣ̾̿̂ͦ́ͧ͠ ҉a̴̸̶͚͓͉̟͕̳͓̞̫͈ͥ̑̓ͭͤ̐̿̿̉̚m͎̰͖̞̘͓̪̲̲̻̽̌̒͑ͣ͒̎̈̐̎̀͠͡ę̨̹̮̼͙̩̭͎͈͓̬͛ͭͣ̋ͣ̈ͪ̔ͥ̂͝t͖̠̭͍̞̖̤͇̩̘͋ͯ̽̌͑ͪ̂ͫ͋ͫ͜͝ ҉


##### size
Size options: `min`, `medium`, `max` (Default: `medium`)
```sh
zalgo --min Lorem ipsum dolor sit amet
```
L̜̰̟̄͆̒́o̹̝̥͛̒͌͜r̨̺͕̮ͤ́̓e̖͕̾̂̄́ͅm̴͓͍̑͛̑ͅ ̢̠̘̥̑ͤ̽i̢͈̩̔̿͐ͅp̛̹̮̖̿ͭͬs̺̜̠ͪ̾̇͠u͙̖̦ͦͪͮ͠m̛͇̠̮ͥͯ̎ ͙̞̯̅̄͋ ҉d̳̳̙͐ͥ͐͠ő͉̟͈̉̓ ҉l̸͚̟̗ͧͨ͊o̷̦̪̎̎ͧͅȑ̭̪̫̉ͩ ҉ ̡͔̘̮ͨ̈̚s̨̗͚͉͗͋͑ì͓̺̯ͨͮ̀t̸͉̬͇ͨ̍̐ ̮̣͇̐͛ͣ͢a̵͎̻̳̍ͪ̎m̻̰̖ͫͮ̊ ҉e̷̘̞͖̽ͯ͐t̨͖͙͙̉ͯ̚

##### position
Position options: `up`, `mid`, `down` (Default: `up`, `mid`, and `down`)
```sh
zalgo --mid Lorem ipsum dolor sit amet
```
L̷͟͠ơ̵͟r ҉̕ ҉ę̸̨m̶̨͢ ̸̨̡i̴̸͠p̢̛͘ş̛̛ú͡͠m̵̡̕ ̨͘͟d̨̛͘o̢͘͞l̡̀͡o̸͢͟r̢͘͝ ̵̛͟s̴̸̴i̸̢̡t̵̴͠ ̷̨́ą̀̕ḿ̨͜e̢̨͡t̸̕͡
##### ease
Ease function options: `linear`, `log`, `exp`, `cubic`, `bounce`, `elastic`, `random` (Default: none)
```sh
zalgo --cubic Lorem ipsum dolor sit amet
```
Lorem ipsum̳̑ ̝ͥd̠͊ọ̒l̦̺̋̂o̪͓̎̋́r̥̬͂̌͘ ̞͕̣ͯ͆̈̀s̶̙̥̦ͨͤ͌i̜͖̠̦̊̊̍̀͝t͈̼̻͉̺͐ͪ͑ͬ̒͠ ̧̖̱̺̭̤̈̍̓͂̚͜ä̸̮̰̝̹̦͌̏ͧ̓ͩ͡ͅm̰͈̝̱̣̼͓̓͒͑͊̏ͤ̑͟͜e̞̰̭͉͉͙͕̤̓́̽ͮ̍̎́́̚̚ṭ̸̢͈̦̙̦͎͉̰͔͋̈̅̌ͬ̆ͩ͑ͩ ҉

## Options

Global options available for all commands

### Disable copy to clipboard
By default, the output is copied to the clipboard, but this can be disabled by passing the option command `-n` or `--no-clipboard`

```sh
# 'foo_bar' will be copied to your clipboard
snake fooBar
# disable that behaviour
snake fooBar --no-clipboard
# same but for the lazy
snake fooBar -n
```

Copying to the clipboard is automatically disabled in some cases:
```sh
# when arguments come from the process standard input
echo 'fooBar' | snake

# when the process standard output is redirected to a file or another process
snake 'fooBar' | grep 'foo'
snake 'fooBar' > somefile
```

## See also
- [Case conversion plugin for SublimeText](https://github.com/jdavisclark/CaseConversion)

## License
MIT
