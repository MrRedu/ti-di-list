import propTypes from 'prop-types'
import { DailyForecast } from './DailyForecast'

const splitArrayByDay = arr => {
  const result = []
  let currentDay = null
  let tempArr = []

  arr.forEach(obj => {
    const day = obj.dt_txt.split(' ')[0]

    if (day !== currentDay) {
      if (tempArr.length > 0) {
        result.push(tempArr)
        tempArr = []
      }
      currentDay = day
    }

    tempArr.push(obj)
  })

  if (tempArr.length > 0) {
    result.push(tempArr)
  }

  return result
}

const minOrMaxTemp = (day, minOrMax) => {
  if (minOrMax === 'min') {
    return day.map(obj => obj.main.temp_min).reduce((a, b) => Math.min(a, b))
  }
  return day.map(obj => obj.main.temp_max).reduce((a, b) => Math.max(a, b))
}

const temperatureByStageOfTheDay = (array, hour) => {
  return array
    .filter(obj => {
      return obj.dt_txt.includes(hour)
    })
    .map(obj => obj.main.temp)
}

const temperatureFeelsLikeByStageOfTheDay = (array, hour) => {
  return array
    .filter(obj => {
      return obj.dt_txt.includes(hour)
    })
    .map(obj => obj.main.feels_like)
}

const iconFrequency = array =>
  array.reduce((acc, obj) => {
    const icon = obj.weather[0].icon
    acc[icon] = (acc[icon] || 0) + 1
    return acc
  }, {})

const descriptionFrequency = array =>
  array.reduce((acc, obj) => {
    const description = obj.weather[0].description
    acc[description] = (acc[description] || 0) + 1
    return acc
  }, {})

// Find the most repeated icon
const mostRepeatedIcon = object =>
  Object.keys(object).reduce((a, b) => (object[a] > object[b] ? a : b))

const mostRepeatedDescription = object =>
  Object.keys(object).reduce((a, b) => (object[a] > object[b] ? a : b))

export const ForecastWeather = ({ forecastWeather }) => {
  const forecastWeatherSplitByDay = splitArrayByDay(forecastWeather)

  const forecastByDay = forecastWeatherSplitByDay.map(day => {
    const date = day[0].dt_txt

    const iconFrequencyVal = iconFrequency(day)
    const mostRepeatedIconVal = mostRepeatedIcon(iconFrequencyVal)
    const descriptionFrequencyVal = descriptionFrequency(day)
    const mostRepeatedDescriptionVal = mostRepeatedDescription(
      descriptionFrequencyVal
    )

    return {
      date,
      minMaxTemp: {
        minTemp: minOrMaxTemp(day, 'min'),
        maxTemp: minOrMaxTemp(day, 'max'),
      },
      stagesOfTheDay: {
        morningTemperature:
          temperatureByStageOfTheDay(day, '06:00:00')[0] || null,
        afternoonTemperature:
          temperatureByStageOfTheDay(day, '15:00:00')[0] || null,
        eveningTemperature:
          temperatureByStageOfTheDay(day, '18:00:00')[0] || null,
        nightTemperature:
          temperatureByStageOfTheDay(day, '21:00:00')[0] || null,
      },
      stagesOfTheDayFeelsLike: {
        morningTemperature:
          temperatureFeelsLikeByStageOfTheDay(day, '06:00:00')[0] || null,
        afternoonTemperature:
          temperatureFeelsLikeByStageOfTheDay(day, '15:00:00')[0] || null,
        eveningTemperature:
          temperatureFeelsLikeByStageOfTheDay(day, '18:00:00')[0] || null,
        nightTemperature:
          temperatureFeelsLikeByStageOfTheDay(day, '21:00:00')[0] || null,
      },
      icon: mostRepeatedIconVal,
      description: mostRepeatedDescriptionVal,
    }
  })

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-left md:text-right mb-2">
        5 days Forecast
      </h3>
      <div
        className="flex flex-col gap-2
        max-h-[calc(100vh-27.5rem)] overflow-y-auto"
      >
        {forecastByDay.map(day => (
          <DailyForecast
            key={day.date}
            today={new Date(day.date)}
            minMaxTemp={day.minMaxTemp}
            stagesOfTheDay={day.stagesOfTheDay}
            mostRepeatedIcon={day.icon}
            mostRepeatedDescriptionVal={day.description}
          />
        ))}
      </div>
    </div>
  )
}

ForecastWeather.propTypes = {
  forecastWeather: propTypes.array,
}
