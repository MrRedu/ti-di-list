import propTypes from 'prop-types'
import { Navigation } from 'lucide-react'
import { HelpText } from '../atoms/HelpText'
import {
  convertDegreesToCardinalDirection,
  metersToKilometers,
} from '@/utils/utils'

export const HelperTexts = ({ wind, pressure, humidity, visibility }) => {
  return (
    <div
      className="
  grid 
  grid-cols-1 sm:grid-cols-2
  w-fit gap-x-4

  border-l-2 sm:border-r-2 blue-gray-200
  pl-4 sm:pr-4 sm:pl-0 sm:border-0

  sm:text-right
  "
    >
      <HelpText className="flex items-center gap-1 ">
        <Navigation fill="#fff" className="w-4 h-4" />
        {wind.speed}m/s {convertDegreesToCardinalDirection(`${wind.deg}`)}
      </HelpText>
      <HelpText>Pressure: {pressure}hPa</HelpText>
      <HelpText>Humidity: {humidity}%</HelpText>
      <HelpText>Visibility : {metersToKilometers(`${visibility}`)}km</HelpText>
    </div>
  )
}
HelperTexts.propTypes = {
  wind: propTypes.object,
  pressure: propTypes.number,
  humidity: propTypes.number,
  visibility: propTypes.number,
}
