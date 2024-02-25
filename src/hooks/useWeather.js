import { useState, useEffect } from 'react'
import { getWeather, getForecastWeather } from '@/services/weather'

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

export function useForecastWeather({ latitude, longitude }) {
  const [forecastWeather, setForecastWeather] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const getForecastWeatherData = async ({ signal }) => {
    try {
      setLoading(true)
      const data = await getForecastWeather({ latitude, longitude, signal })
      setForecastWeather(data)
    } catch (error) {
      setError(error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    const abortController = new AbortController()
    getForecastWeatherData({ signal: abortController.signal })

    return () => abortController.abort()
  }, [latitude, longitude])

  return { forecastWeather, loading, error }
}
