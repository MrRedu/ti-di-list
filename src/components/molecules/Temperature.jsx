import propTypes from 'prop-types'
export const Temperature = ({ icon, temperature }) => {
  return (
    <div
      className="
  flex items-center gap-2
  "
    >
      <img
        className="w-20 h-auto"
        src={`https://openweathermap.org/img/wn/${icon}@2x.png`}
        alt="Icon"
      />
      <p className="text-3xl">{temperature}°C</p>
    </div>
  )
}
Temperature.propTypes = {
  icon: propTypes.string.isRequired,
  temperature: propTypes.string.isRequired,
}
