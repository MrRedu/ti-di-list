import propTypes from 'prop-types'
import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { FormatDate, kelvinToCelsius } from '@/utils/utils'
export const DailyForecast = ({
  today,
  minMaxTemp: { minTemp, maxTemp },
  stagesOfTheDay,
  stagesOfTheDayFeelsLike,
}) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleOpen = () => setIsOpen(!isOpen)

  const day = FormatDate({
    date: today,
    options: {
      weekday: 'short',
      month: 'short',
      day: 'numeric',
    },
  })

  return (
    <>
      <button
        onClick={handleOpen}
        className="w-full flex justify-between items-center text-sm border shadow px-4 py-2"
      >
        <div className="flex flex-col gap-2">
          <span>{day}</span>
        </div>
        <div className="flex gap-4  items-center">
          <span>
            {kelvinToCelsius(maxTemp, 0)} / {kelvinToCelsius(minTemp, 0)}°C
          </span>
          <span>few clouds</span>
          <ChevronDown />
        </div>
      </button>
      {isOpen && (
        <div className="flex flex-col gap-2 text-sm">
          <div className="flex flex-col gap-2 align-left md:align-right">
            <div className="flex gap-4 flex-row md:flex-row-reverse">
              <img
                className="max-w-[42px] h-auto"
                src={`https://openweathermap.org/img/wn/01d@2x.png`}
                alt="Icon"
              />

              <div className="flex flex-col w-full">
                <h4 className="md:text-right">Moderate rain. Fresh Breeze.</h4>
                <p className="md:text-right">
                  The high will be {kelvinToCelsius(maxTemp, 0)}°C, the low will
                  be {kelvinToCelsius(minTemp, 0)}°C.
                </p>
              </div>
            </div>
          </div>
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
                    ? kelvinToCelsius(stagesOfTheDay.morningTemperature, 0) +
                      '°C'
                    : null}
                </td>
                <td>
                  {stagesOfTheDay.afternoonTemperature
                    ? kelvinToCelsius(stagesOfTheDay.afternoonTemperature, 0) +
                      '°C'
                    : null}
                </td>
                <td>
                  {stagesOfTheDay.eveningTemperature
                    ? kelvinToCelsius(stagesOfTheDay.eveningTemperature, 0) +
                      '°C'
                    : null}
                </td>
                <td>
                  {stagesOfTheDay.nightTemperature
                    ? kelvinToCelsius(stagesOfTheDay.nightTemperature, 0) + '°C'
                    : null}
                </td>
              </tr>
              <tr>
                <td className="text-left">Feels like</td>
                <td>
                  {stagesOfTheDayFeelsLike.morningTemperature
                    ? kelvinToCelsius(
                        stagesOfTheDayFeelsLike.morningTemperature,
                        0
                      ) + '°C'
                    : null}
                </td>
                <td>
                  {stagesOfTheDayFeelsLike.afternoonTemperature
                    ? kelvinToCelsius(
                        stagesOfTheDayFeelsLike.afternoonTemperature,
                        0
                      ) + '°C'
                    : null}
                </td>
                <td>
                  {stagesOfTheDayFeelsLike.eveningTemperature
                    ? kelvinToCelsius(
                        stagesOfTheDayFeelsLike.eveningTemperature,
                        0
                      ) + '°C'
                    : null}
                </td>
                <td>
                  {stagesOfTheDayFeelsLike.nightTemperature
                    ? kelvinToCelsius(
                        stagesOfTheDayFeelsLike.nightTemperature,
                        0
                      ) + '°C'
                    : null}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </>
  )
}
DailyForecast.propTypes = {
  today: propTypes.instanceOf(Date),
  minMaxTemp: propTypes.shape({
    minTemp: propTypes.number,
    maxTemp: propTypes.number,
  }),
  stagesOfTheDay: propTypes.shape({
    morningTemperature: propTypes.number,
    afternoonTemperature: propTypes.number,
    eveningTemperature: propTypes.number,
    nightTemperature: propTypes.number,
  }),
  stagesOfTheDayFeelsLike: propTypes.shape({
    morningTemperature: propTypes.number,
    afternoonTemperature: propTypes.number,
    eveningTemperature: propTypes.number,
    nightTemperature: propTypes.number,
  }),
}
