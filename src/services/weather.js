const API_KEY = import.meta.env.VITE_API_KEY_OPENWEATHER

export const getWeather = async ({ latitude, longitude, signal }) => {
  try {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`

    const res = await fetch(URL, { signal })
    const data = await res.json()

    return data
  } catch (error) {
    throw new Error(error)
  }
}
