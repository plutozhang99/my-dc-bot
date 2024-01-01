import { Response } from 'express';
import { fetchNearbyRestaurants } from '../utils/googlePlacesApi';

export const handleRestaurantCommand = async (postalCode: string, style: string, id: String) => {
    const restaurant = await fetchNearbyRestaurants(postalCode, style);
    console.log(restaurant)
    return restaurant ? `<@${id}> \n You should try ${restaurant.name} at [${restaurant.address}](https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(restaurant.address)}) today` : 'No restaurants found!';
};
