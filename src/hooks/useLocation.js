import { useState, useEffect } from 'react'
import { DEFAULT_LOCATION } from '@/libs/const'

function useLocation() {
  const [myLocation, setMyLocation] = useState(DEFAULT_LOCATION)

  const successHandler = response => {
    const { latitude, longitude } = response.coords

    setMyLocation({ latitude, longitude })
  }

  const errorHandler = error => {
    console.log(error)
  }

  const getLocation = async () => {
    try {
      const response = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject)
      })

      successHandler(response)
    } catch (error) {
      errorHandler(error)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return { myLocation, getLocation }
}

export default useLocation
