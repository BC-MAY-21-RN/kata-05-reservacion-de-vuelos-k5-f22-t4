
export async function getFlights() {
    try {
        const url = 'https://620e98baec8b2ee28326dc72.mockapi.io/data/flights'
        const response = await fetch(url)
        const flights = await response.json()
        return flights
    } catch (error) {
        throw error;
    }
}