import propTypes from 'prop-types'
import { DailyForecast } from './DailyForecast'
import { kelvinToCelsius } from '@/utils/utils'

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

export const ForecastWeather = ({ forecastWeather }) => {
  const forecastWeatherSplitByDay = splitArrayByDay(forecastWeather)

  const forecastByDay = forecastWeatherSplitByDay.map(day => {
    const date = day[0].dt_txt

    const minTemp = day
      .map(obj => obj.main.temp_min)
      .reduce((a, b) => Math.min(a, b))

    const maxTemp = day
      .map(obj => obj.main.temp_max)
      .reduce((a, b) => Math.max(a, b))

    const stageOfTheDay = (array, hour) => {
      return array
        .filter(obj => {
          return obj.dt_txt.includes(hour)
        })
        .map(obj => obj.main.temp)
    }

    return {
      date,
      minMaxTemp: {
        min: kelvinToCelsius(minTemp, 0),
        max: kelvinToCelsius(maxTemp, 0),
      },
      stagesOfTheDay: {
        morningTemperature: stageOfTheDay(day, '06:00:00')[0] || null,
        afternoonTemperature: stageOfTheDay(day, '12:00:00')[0] || null,
        eveningTemperature: stageOfTheDay(day, '18:00:00')[0] || null,
        nightTemperature: stageOfTheDay(day, '21:00:00')[0] || null,
      },
    }
  })

  console.log({ forecastByDay })

  return (
    <div className="w-full">
      <h3 className="text-xl font-bold text-left md:text-right">
        5 days Forecast
      </h3>
      <div
        className="flex flex-col gap-2
    max-h-[calc(100vh-28rem)] overflow-y-auto"
      >
        {forecastByDay.map(day => (
          <DailyForecast
            key={day.date}
            today={new Date(day.date)}
            minMaxTemp={day.minMaxTemp}
            stagesOfTheDay={day.stagesOfTheDay}
          />
        ))}
      </div>
    </div>
  )
}

ForecastWeather.propTypes = {
  forecastWeather: propTypes.array,
}
