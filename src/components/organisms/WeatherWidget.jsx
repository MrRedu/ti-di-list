import { capitalizeString, kelvinToCelsius } from '@/utils/utils'

import useLocation from '@/hooks/useLocation'
import { useWeather } from '@/hooks/useWeather'

import { HelpText } from '@/components/atoms/HelpText'
import { Section } from '@/components/atoms/ui/Section'
import { HelperTexts } from '../molecules/HelperTexts'

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
    // loading,
    // error,
  } = useLocation()
  const { weather } = useWeather({ latitude, longitude })

  if (!weather) {
    return (
      <div className="w-full flex items-center justify-center" role="status">
        <svg
          aria-hidden="true"
          className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <>
      {weather && (
        <Section className="w-full flex flex-col pb-12 md:py-12  md:items-end">
          <HelpText className="flex gap-2">
            <span>{dateFormatted}</span>
            <span>{timeFormatted}</span>
          </HelpText>

          <h3 className="text-2xl font-bold">
            {weather.name}, {weather.sys.country}
          </h3>
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
          <HelperTexts
            wind={weather.wind}
            humidity={weather.main.humidity}
            pressure={weather.main.pressure}
            visibility={weather.visibility}
          />
        </Section>
      )}
    </>
  )
}
