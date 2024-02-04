import useLocation from '@/hooks/useLocation'
import { useWeather } from '@/hooks/useWeather'

export const WeatherWidget = () => {
  const { myLocation } = useLocation()
  const { latitude, longitude } = myLocation || {}
  const { weather } = useWeather({ latitude, longitude })

  return (
    <div>
      <h1>{`</WeatherApp>`}</h1>
      {latitude && longitude && (
        <>
          <p>lat: {latitude}</p>
          <p>long: {longitude}</p>
        </>
      )}
      {weather && JSON.stringify(weather, null, 2)}
    </div>
  )
}
