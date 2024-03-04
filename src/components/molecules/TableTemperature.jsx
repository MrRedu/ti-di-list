import { kelvinToCelsius } from '@/utils/utils'
import propTypes from 'prop-types'
export const TableTemperature = ({ stagesOfTheDay }) => {
  return (
    <table className="w-full text-center">
      <thead>
        <tr>
          <th></th>
          <th>Morning</th>
          <th>Afternoon</th>
          <th>Evening</th>
          <th>Night</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="text-left">Temperature</td>
          <td>
            {stagesOfTheDay.morningTemperature
              ? kelvinToCelsius(stagesOfTheDay.morningTemperature, 0) + '°C'
              : null}
          </td>
          <td>
            {stagesOfTheDay.afternoonTemperature
              ? kelvinToCelsius(stagesOfTheDay.afternoonTemperature, 0) + '°C'
              : null}
          </td>
          <td>
            {stagesOfTheDay.eveningTemperature
              ? kelvinToCelsius(stagesOfTheDay.eveningTemperature, 0) + '°C'
              : null}
          </td>
          <td>
            {stagesOfTheDay.nightTemperature
              ? kelvinToCelsius(stagesOfTheDay.nightTemperature, 0) + '°C'
              : null}
          </td>
        </tr>
      </tbody>
    </table>
  )
}
TableTemperature.propTypes = {
  stagesOfTheDay: propTypes.shape({
    morningTemperature: propTypes.number,
    afternoonTemperature: propTypes.number,
    eveningTemperature: propTypes.number,
    nightTemperature: propTypes.number,
  }),
}
