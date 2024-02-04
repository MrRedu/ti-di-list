import { useState, useEffect } from 'react'
import { getWeather } from '@/services/weather'

export function useWeather({ latitude, longitude }) {
  const [weather, setWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getWeatherData = async ({ signal }) => {
    try {
      setLoading(true)
      const data = await getWeather({ latitude, longitude, signal })
      setWeather(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    getWeatherData({ signal: abortController.signal })

    return () => abortController.abort()
  }, [latitude, longitude])

  return { weather, loading, error }
}
