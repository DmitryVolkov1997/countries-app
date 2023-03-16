const API_URL = 'https://restcountries.com/v2'

const ALL_COUNTRIES = `${API_URL}/all?fields=name,population,region,capital,flags`

const searchByCountry = (name: string) => `${API_URL}/name/` + name

const filterByCode = (codes: string[]) => `${API_URL}/alpha?codes=${codes.join(',')}`

export {API_URL, ALL_COUNTRIES, searchByCountry, filterByCode}
