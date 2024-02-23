import { kelvinToCelsius } from '@/utils/utils'
import propTypes from 'prop-types'
import { Temperature } from '../molecules/Temperature'
export const ForecastWeather = ({ countryCode, cityName, forecastWeather }) => {
  return (
    <div
      className="outline outline-1 outline-red-800 
      w-full"
    >
      {/* <p>
        <span>{countryCode}</span> / <span>{cityName}</span>
      </p> */}
      <div className="flex gap-4 overflow-y-auto">
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
  countryCode: propTypes.string,
  cityName: propTypes.string,
  forecastWeather: propTypes.array,
}
