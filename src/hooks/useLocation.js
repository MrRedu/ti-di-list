import { DEFAULT_LOCATION } from '@/utils/const'
import { useState, useEffect } from 'react'

export default function useLocation(options) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState()
  const [location, setLocation] = useState(DEFAULT_LOCATION)

  useEffect(() => {
    const successHandler = e => {
      setLoading(false)
      setError(null)
      setLocation(e.coords)
    }
    const errorHandler = e => {
      setError(e)
      setLoading(false)
    }
    navigator.geolocation.getCurrentPosition(
      successHandler,
      errorHandler,
      options
    )
    const id = navigator.geolocation.watchPosition(
      successHandler,
      errorHandler,
      options
    )
    return () => navigator.geolocation.clearWatch(id)
  }, [options])

  return { loading, error, location }
}
