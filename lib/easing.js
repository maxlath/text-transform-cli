// Source: https://easings.net

const easeOutBounce = x => {
  const n1 = 7.5625
  const d1 = 2.75

  if (x < 1 / d1) {
      return n1 * x * x
  } else if (x < 2 / d1) {
      return n1 * (x -= 1.5 / d1) * x + 0.75
  } else if (x < 2.5 / d1) {
      return n1 * (x -= 2.25 / d1) * x + 0.9375
  } else {
      return n1 * (x -= 2.625 / d1) * x + 0.984375
  }
}

const easeInBounce = x => 1 - easeOutBounce(1 - x)

const c4 = (2 * Math.PI) / 3
const easeInElastic = x => -Math.pow(2, 10 * x - 10) * Math.sin((x * 10 - 10.75) * c4)

module.exports = {
  linear: x => x,
  exp: x => x * x,
  cubic: x => x * x * x,
  log: x => Math.log(x * 10),
  random: x => Math.random() * x,
  bounce: easeInBounce,
  elastic: easeInElastic
}
