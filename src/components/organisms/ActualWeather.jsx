import propTypes from 'prop-types'
import { HelpText } from '../atoms/HelpText'
import { StatsWeather } from '../molecules/StatsWeather'
import { Temperature } from '../molecules/Temperature'

export const ActualWeather = ({
  date,
  time,
  cityName,
  countryCode,
  iconTemperature,
  temperature,
  feelsLike,
  descriptionTemperature,
  wind,
  humidity,
  pressure,
  visibility,
}) => {
  return (
    <>
      <HelpText className="flex gap-2">
        <span>{date}</span>
        <span>{time}</span>
      </HelpText>
      <h2 className="text-2xl font-bold">
        {cityName}, {countryCode}
      </h2>
      <Temperature icon={iconTemperature} temperature={temperature} />
      <div className="flex gap-2 ">
        <p className="font-bold">Feels like {feelsLike}°C.</p>
        <p className="font-bold">{descriptionTemperature}.</p>
      </div>
      <StatsWeather
        wind={wind}
        humidity={humidity}
        pressure={pressure}
        visibility={visibility}
      />
    </>
  )
}

ActualWeather.propTypes = {
  date: propTypes.string,
  time: propTypes.string,
  cityName: propTypes.string,
  countryCode: propTypes.string,
  iconTemperature: propTypes.string,
  temperature: propTypes.string,
  feelsLike: propTypes.string,
  descriptionTemperature: propTypes.string,
  wind: propTypes.object,
  humidity: propTypes.number,
  pressure: propTypes.number,
  visibility: propTypes.number,
}
