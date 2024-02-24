import { kelvinToCelsius } from '@/utils/utils'
import propTypes from 'prop-types'
import { Temperature } from '../molecules/Temperature'
export const ForecastWeather = ({ forecastWeather }) => {
  const averageDailyTemperature = forecastWeather => {
    return (
      forecastWeather.map(({ main }) => main.temp).reduce((a, b) => a + b, 0) /
      forecastWeather.length
    )
  }

  // Función para separar los climas por día
  const separateForecastListByDay = weatherData => {
    const daysData = []
    const numDays = Math.ceil(weatherData.length / 8)

    for (let i = 0; i < numDays; i++) {
      const startIndex = i * 8
      const endIndex = Math.min(startIndex + 8, weatherData.length)
      const dailyWeather = weatherData.slice(startIndex, endIndex)
      daysData.push(dailyWeather)
    }

    return daysData
  }

  const weatherByDay = separateForecastListByDay(forecastWeather)
  const averageWeatherPerDayInKelvin = weatherByDay.map(averageDailyTemperature)
  const averageWeatherPerDayInCelsius = averageWeatherPerDayInKelvin.map(day =>
    kelvinToCelsius(day)
  )

  // console.log(averageWeatherPerDayInCelsius)

  return (
    <div
      className="outline outline-1 outline-red-800 
      w-full 
      
      "
    >
      <div
        className="
      flex gap-4 overflow-y-auto"
      >
        {forecastWeather.map(({ dt_txt, main, weather }) => (
          <div
            key={dt_txt}
            className="flex flex-col gap-2 min-w-[200px] items-center"
          >
            <p>
              <span>{new Date(dt_txt).toLocaleString()}</span>
            </p>
            {/* <p>
              temp: <span>{kelvinToCelsius(main.temp)}</span>
            </p> */}
            <Temperature
              icon={weather[0].icon}
              temperature={kelvinToCelsius(main.temp)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

ForecastWeather.propTypes = {
  forecastWeather: propTypes.array,
}
