import propTypes from 'prop-types'
import { useState } from 'react'
import { FormatDate, capitalizeString, kelvinToCelsius } from '@/utils/utils'
import { TableTemperature } from '../molecules/TableTemperature'
export const DailyForecast = ({
  today,
  minMaxTemp: { minTemp, maxTemp },
  stagesOfTheDay,
  mostRepeatedIcon,
  mostRepeatedDescriptionVal,
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
        className={`
        w-full 
        px-4 py-2
        flex justify-between items-center 
        text-sm 
        rounded

        ${isOpen ? 'shadow-none' : 'shadow '}
        `}
      >
        <div className="flex flex-col gap-2">
          <span>{day}</span>
        </div>
        <div className="flex gap-4 items-center">
          <span>
            {kelvinToCelsius(maxTemp, 0)} / {kelvinToCelsius(minTemp, 0)}°C
          </span>
        </div>
      </button>
      {isOpen && (
        <div
          onClick={handleOpen}
          className={`flex flex-col gap-2 text-sm cursor-pointer

          relative 
          pb-4 px-4
          rounded
        
        ${isOpen ? 'shadow' : 'shadow-none'}
        `}
        >
          <div className="flex flex-col gap-2 align-left md:align-right">
            <div className="flex gap-4 flex-row md:flex-row-reverse">
              <img
                className="max-w-[42px] h-auto drop-shadow-lg"
                src={`https://openweathermap.org/img/wn/${mostRepeatedIcon}@2x.png`}
                alt="Icon"
              />

              <div className="flex flex-col w-full">
                <h4 className="md:text-right font-bold text-base">
                  {capitalizeString(mostRepeatedDescriptionVal)}.
                </h4>
                <p className="md:text-right">
                  The high will be {kelvinToCelsius(maxTemp, 0)}°C, the low will
                  be {kelvinToCelsius(minTemp, 0)}°C.
                </p>
              </div>
            </div>
          </div>
          <TableTemperature stagesOfTheDay={stagesOfTheDay} />
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
  mostRepeatedIcon: propTypes.string,
  mostRepeatedDescriptionVal: propTypes.string,
}
