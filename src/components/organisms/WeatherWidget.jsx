import { kelvinToCelsius } from '@/utils/utils'

import useLocation from '@/hooks/useLocation'
import { useWeather, useForecastWeather } from '@/hooks/useWeather'

import { Section } from '@/components/atoms/ui/Section'

import { Loader } from '@/components/atoms/ui/Loader'
import { ActualWeather } from './ActualWeather'
import { ForecastWeather } from './ForecastWeather'

const today = new Date()

const optionsToDate = {
  weekday: 'long',
  month: 'long',
  day: 'numeric',
}

const optionsToTime = {
  hour: 'numeric',
  minute: 'numeric',
}

const browserLanguages = navigator.languages
const FormatDate = (language, date) =>
  new Intl.DateTimeFormat(language, optionsToDate).format(date)

const FormatTime = (language, date) =>
  new Intl.DateTimeFormat(language, optionsToTime).format(date)

const dateFormatted = FormatDate(browserLanguages, today)
const timeFormatted = FormatTime(browserLanguages, today)

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
        flex flex-col justify-between gap-4
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
            forecastWeather={forecastWeather.list.slice(0, 10)}
          />
        </>
      )}
    </Section>
  )
}
