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
  grid-cols-1 md:grid-cols-2
  w-fit gap-x-4

  border-l-2 md:border-r-2 blue-gray-200
  pl-4 md:pr-4 md:pl-0 md:border-0

  md:text-right
  "
    >
      <HelpText className="flex items-center gap-1 md:justify-end">
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
