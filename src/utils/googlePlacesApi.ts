import fetch from 'node-fetch';

const API_KEY = process.env.GOOGLE_API_KEY;  // Ensure your .env file has GOOGLE_API_KEY

export async function fetchNearbyRestaurants(postalCode: string, style: string) {
    const url = constructUrl(postalCode, style);
    const response = await fetch(url);
    const data = await response.json();

    if (data.results && data.results.length > 0) {
        const randomIndex = Math.floor(Math.random() * data.results.length);
        const place = data.results[randomIndex];
        return {
            name: place.name,
            address: place.vicinity,
        };
    }
    return null;
}

function constructUrl( postalCode: string, style: string): string {
    const location = `${postalCode}`;  // Update as per Google API requirements
    return `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=1000&type=restaurant&keyword=${style}&key=${API_KEY}`;
}
