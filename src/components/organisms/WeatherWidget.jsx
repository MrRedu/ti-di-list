import { FormatDate, FormatTime, kelvinToCelsius } from '@/utils/utils'

import useLocation from '@/hooks/useLocation'
import { useWeather, useForecastWeather } from '@/hooks/useWeather'

import { Section } from '@/components/atoms/ui/Section'

import { Loader } from '@/components/atoms/ui/Loader'
import { ActualWeather } from './ActualWeather'
import { ForecastWeather } from './ForecastWeather'

const today = new Date()
const dateFormatted = FormatDate({ date: today })
const timeFormatted = FormatTime({ date: today })

export const WeatherWidget = () => {
  const {
    location: { latitude, longitude } = {},
    loading,
    // error,
  } = useLocation()
  const { weather } = useWeather({ latitude, longitude })
  const { forecastWeather } = useForecastWeather({ latitude, longitude })

  if (loading) return <Loader />

  // console.table({ forecastWeather })

  return (
    <Section
      className="
        w-full md:w-1/2
        flex flex-col gap-2
        pb-12 md:py-12

        text-black
        dark:text-gray-300
        "
    >
      {weather && forecastWeather && (
        <>
          <ActualWeather
            date={dateFormatted}
            time={timeFormatted}
            cityName={weather.name}
            countryCode={weather.sys.country}
            iconTemperature={weather.weather[0].icon}
            temperature={kelvinToCelsius(weather.main.temp)}
            feelsLike={kelvinToCelsius(weather.main.feels_like)}
            descriptionTemperature={weather.weather[0].description}
            wind={weather.wind}
            humidity={weather.main.humidity}
            pressure={weather.main.pressure}
            visibility={weather.visibility}
          />
          <ForecastWeather
            countryCode={forecastWeather.city.country}
            cityName={forecastWeather.city.name}
            forecastWeather={forecastWeather.list}
          />
        </>
      )}
    </Section>
  )
}
