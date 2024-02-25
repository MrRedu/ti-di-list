export const capitalizeString = string =>
  string.charAt(0).toUpperCase() + string.slice(1)

export const metersToKilometers = number => (number / 1000).toFixed(1)

// This variable is used to convert Kelvin to Celsius
const KELVIN_ZERO_TO_CELSIUS = 273.15

export const kelvinToCelsius = (kelvin, notation = 1) => {
  if (kelvin === null || kelvin === undefined || isNaN(kelvin)) return 'X'

  const celsius = kelvin - KELVIN_ZERO_TO_CELSIUS
  return celsius.toFixed(notation)
}

// const TEMPERATURE_FAHRENHEIT = (TEMPERATURE_CELSIUS * (9 / 5) + 32).toFixed(1)

// Convert degrees or angles to cardinal direction
// https://gist.github.com/theKAKAN/b40bf54144a6eb90313ad00681e3fbcc thanks, man
export const convertDegreesToCardinalDirection = angle => {
  // We divide it into 16 sections
  const directions = [
    'N',
    'NNE',
    'NE',
    'ENE',
    'E',
    'ESE',
    'SE',
    'SSE',
    'S',
    'SSW',
    'SW',
    'WSW',
    'W',
    'WNW',
    'NW',
    'NNW',
  ]
  // This means, every 360 / 16 degree, there's a section change
  // So, in our case, every 22.5 degree, there's a section change
  // In order to get the correct section, we just need to divide
  let section = parseInt(angle / 22.5 + 0.5)
  // If our result comes to be x.6, which should normally be rounded off to
  // int(x) + 1, but parseInt doesn't care about it
  // Hence, we are adding 0.5 to it

  // Now we know the section, just need to make sure it's under 16
  section = section % 16

  // Now we can return it
  return directions[section]
}

const optionsToTime = {
  hour: 'numeric',
  minute: 'numeric',
}
const optionsToDate = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
}
const browserLanguages = navigator.languages

export const FormatDate = ({
  language = browserLanguages,
  date,
  options = optionsToDate,
}) => new Intl.DateTimeFormat(language, options).format(date)

export const FormatTime = ({
  language = browserLanguages,
  date,
  options = optionsToTime,
}) => new Intl.DateTimeFormat(language, options).format(date)
