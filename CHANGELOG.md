# CHANGELOG
*versions follow [SemVer](http://semver.org)*

## 3.1.0 - 2022-03-05
* Added style commands:
  * [boldsans](https://github.com/maxlath/text-transform-cli#boldsans)
  * [boldserif](https://github.com/maxlath/text-transform-cli#boldserif)
  * [bolditalicsans](https://github.com/maxlath/text-transform-cli#bolditalicsans)
  * [bolditalicserif](https://github.com/maxlath/text-transform-cli#bolditalicserif)
  * [gothic](https://github.com/maxlath/text-transform-cli#gothic)
  * [gothicbold](https://github.com/maxlath/text-transform-cli#gothicbold)
  * [italicsans](https://github.com/maxlath/text-transform-cli#italicsans)
  * [italicserif](https://github.com/maxlath/text-transform-cli#italicserif)
  * [monospace](https://github.com/maxlath/text-transform-cli#monospace)
  * [strike](https://github.com/maxlath/text-transform-cli#strike)
  * [underline](https://github.com/maxlath/text-transform-cli#underline)
  * [upsidedown](https://github.com/maxlath/text-transform-cli#upsidedown)
* Added [unicode](https://github.com/maxlath/text-transform-cli#unicode)

## 3.0.0 - 2020-07-16
* [`urlencode`](https://github.com/maxlath/text-transform-cli#urlencode): default to using the `encodeURI` function, using the `encodeURIComponent` function only if requested with `--component`

## 2.2.0 - 2020-07-16
* Added [`pascal`](https://github.com/maxlath/text-transform-cli#pascal)

## 2.1.0 - 2020-07-16
* Added [`zalgo`](https://github.com/maxlath/text-transform-cli#zalgo)

## 2.0.0 - 2020-05-16
* **BREAKING CHANGE**: [auto-disabling clipboard when the input comes from stdin or when the output is redirected to some file or piped to another process](https://github.com/maxlath/text-transform-cli#disable-copy-to-clipboard)
* **BREAKING CHANGE**: Splitted `reverse` into [`reverse`](https://github.com/maxlath/text-transform-cli#reverse) and [`reversewords`](https://github.com/maxlath/text-transform-cli#reversewords)
* Deprecated `--no-cb`, in favor of [`-n` or `--no-clipboard`](https://github.com/maxlath/text-transform-cli#disable-copy-to-clipboard)

## 1.7.0 - 2020-05-13
* Added [`urlencode`](https://github.com/maxlath/text-transform-cli#urlencode)
* Added [`urldecode`](https://github.com/maxlath/text-transform-cli#urldecode)
* Added [`htmlencode`](https://github.com/maxlath/text-transform-cli#htmlencode)
* Added [`htmldecode`](https://github.com/maxlath/text-transform-cli#htmldecode)

## 1.6.0 - 2020-04-24
* Added [`superscript`](https://github.com/maxlath/text-transform-cli#superscript)
* Added [`subscript`](https://github.com/maxlath/text-transform-cli#subscript)

## 1.5.0 - 2018-11-09
* Added [`randomcase`](https://github.com/maxlath/text-transform-cli#randomcase)

## 1.4.0 - 2018-11-05
* Added [`colon`](https://github.com/maxlath/text-transform-cli#colon)

## 1.3.0 - 2017-08-12
* Added [`--no-cb` option](https://github.com/maxlath/text-transform-cli#disable-copy-to-clipboard)
