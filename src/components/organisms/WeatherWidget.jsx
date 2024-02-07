import useLocation from '@/hooks/useLocation'
import { useWeather } from '@/hooks/useWeather'
import {
  capitalizeString,
  convertDegreesToCardinalDirection,
  kelvinToCelsius,
  metersToKilometers,
} from '@/utils/utils'
import { HelpText } from '../atoms/HelpText'
import { Navigation } from 'lucide-react'

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

const browserLanguage = navigator.language
const FormatDate = (language, date) =>
  new Intl.DateTimeFormat(language, optionsToDate).format(date)

const FormatTime = (language, date) =>
  new Intl.DateTimeFormat(language, optionsToTime).format(date)

const dateFormatted = FormatDate(browserLanguage, today)
const timeFormatted = FormatTime(browserLanguage, today)

export const WeatherWidget = () => {
  const {
    location: { latitude, longitude } = {},
    // loading,
    // error,
  } = useLocation()
  const { weather } = useWeather({ latitude, longitude })

  return (
    <div className="w-full">
      {weather && (
        <div
          className="
          
        flex flex-col
        p-8
        sm:p-12


        "
        >
          <HelpText className="flex gap-2">
            <span>{dateFormatted}</span>
            <span>{timeFormatted}</span>
          </HelpText>

          <p className="text-2xl font-bold">
            {weather.name}, {weather.sys.country}
          </p>
          <div
            className="
          flex items-center gap-2
          "
          >
            <img
              className="w-20"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt="Icon"
            />
            <p className="text-3xl">{kelvinToCelsius(weather.main.temp)}°C</p>
            {/* <p>Temperature: {TEMPERATURE_FAHRENHEIT}°F</p> */}
          </div>
          <div className="flex gap-2 ">
            <p className="font-bold">
              Feels like {kelvinToCelsius(weather.main.feels_like)}°C.
            </p>
            <p className="font-bold">
              {capitalizeString(weather.weather[0].description)}.
            </p>
          </div>
          <div
            className="
          grid 
          grid-cols-1 sm:grid-cols-2
          w-fit gap-x-4

          border-l-2 border-amber-400
          pl-4
          
          "
          >
            <HelpText className="flex items-center gap-1">
              <Navigation fill="#fff" className="w-4 h-4" />
              {weather.wind.speed}m/s{' '}
              {convertDegreesToCardinalDirection(`${weather.wind.deg}`)}
            </HelpText>
            <HelpText>Pressure: {weather.main.pressure}hPa</HelpText>
            <HelpText>Humidity: {weather.main.humidity}%</HelpText>
            <HelpText>
              Visibility : {metersToKilometers(`${weather.visibility}`)}km
            </HelpText>
          </div>
        </div>
      )}
    </div>
  )
}
