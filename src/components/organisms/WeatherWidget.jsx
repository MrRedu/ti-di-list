import { capitalizeString, kelvinToCelsius } from '@/utils/utils'

import useLocation from '@/hooks/useLocation'
import { useWeather } from '@/hooks/useWeather'

import { HelpText } from '@/components/atoms/HelpText'
import { Section } from '@/components/atoms/ui/Section'
import { HelperTexts } from '@/components/molecules/HelperTexts'
import { Temperature } from '@/components/molecules/Temperature'
import { Loader } from '@/components/atoms/ui/Loader'

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

  if (loading) return <Loader />

  return (
    <>
      {weather && (
        <Section
          className="
        w-full md:w-2/5 
        flex flex-col 
        md:items-end
        pb-12 md:py-12

        text-black
        dark:text-gray-300
        "
        >
          {/* <Input placeholder="Search city" /> */}
          <HelpText className="flex gap-2">
            <span>{dateFormatted}</span>
            <span>{timeFormatted}</span>
          </HelpText>

          <h2 className="text-2xl font-bold">
            {weather.name}, {weather.sys.country}
          </h2>

          <Temperature
            icon={weather.weather[0].icon}
            temperature={kelvinToCelsius(weather.main.temp)}
          />

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
