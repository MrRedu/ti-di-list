import propTypes from 'prop-types'
export const Temperature = ({ icon, temperature }) => {
  return (
    <div className="flex items-center gap-2">
      <img
        className="w-16 h-auto drop-shadow-md"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Icon weather"
      />
      <p className="text-3xl font-bold">{temperature}°C</p>
    </div>
  )
}
Temperature.propTypes = {
  icon: propTypes.string.isRequired,
  temperature: propTypes.string.isRequired,
}
