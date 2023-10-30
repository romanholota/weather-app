export interface WeatherData {
    current: {
        time: string
        interval: number
        temperature_2m: number
    }
    daily: {
        time: string[]
        temperature_2m_min: number[]
        temperature_2m_max: number[]
        weathercode: number[]
    }
}
