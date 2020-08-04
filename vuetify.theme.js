import colors from 'vuetify/es5/util/colors'

const { red, blue, green, orange } = colors
const { teal } = colors

const base = {
  primary: teal,
  secondary: green,
  error: red,
  info: blue,
  success: green,
  warning: orange,
}

const { entries, fromEntries } = Object

const light = fromEntries(entries(base).map(([k, v]) => [k, v.lighten1]))
const dark = fromEntries(entries(base).map(([k, v]) => [k, v.darken1]))
const accent = teal.accent3

module.exports = {
  dark: true,
  themes: {
    light: { ...light, accent },
    dark: { ...dark, accent },
  },
}
