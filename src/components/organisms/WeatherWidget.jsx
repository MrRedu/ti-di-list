import useLocation from '@/hooks/useLocation'
import { useWeather } from '@/hooks/useWeather'
import {
  capitalizeString,
  convertDegreesToCardinalDirection,
  kelvinToCelsius,
  metersToKilometers,
} from '@/utils/utils'

const today = new Date()
const day = today.getDay().toString().padStart(2, '0')
const month = (today.getMonth() + 1).toString().padStart(2, '0')
const year = today.getFullYear()
const date = `${month}/${day}/${year}`
const time = `${today.getHours()}:${today
  .getMinutes()
  .toString()
  .padStart(2, '0')}`

const HelpText = ({ children }) => <p className="text-sm">{children}</p>

export const WeatherWidget = () => {
  const { myLocation } = useLocation()
  const { latitude, longitude } = myLocation || {}
  const { weather } = useWeather({ latitude, longitude })

  // console.log(weather)

  return (
    <div>
      {/* {latitude && longitude && (
        <>
          <p>lat: {latitude}</p>
          <p>long: {longitude}</p>
        </>
      )} */}
      {/* {weather && JSON.stringify(weather, null, 2)} */}
      {weather && (
        <div
          className="
        flex flex-col
        p-8
        bk-min-420:p-12


        bg-[url('https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?q=80&w=1335&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]
        bg-cover bg-center bg-no-repeat

        text-gray-100
        "
        >
          <p>
            Date {date} / Time {time}
          </p>
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
          grid-cols-1 bk-min-420:grid-cols-2
          w-fit gap-x-4

          border-l-2 border-amber-400
          pl-4
          
          "
          >
            <HelpText>
              {weather.wind.speed}m/s{' '}
              {convertDegreesToCardinalDirection(`${weather.wind.deg}`)}
            </HelpText>
            <HelpText>Pressure: {weather.main.pressure}hPa</HelpText>
            <HelpText>Humidity: {weather.main.humidity}%</HelpText>
            {/* <HelpText>Clouds: {weather.clouds.all}%</HelpText> */}
            <HelpText>
              Visibility : {metersToKilometers(`${weather.visibility}`)}km
            </HelpText>
            {/* <p>Weather icon: {weather.weather[0].icon}</p> */}
          </div>
        </div>
      )}
    </div>
  )
}
