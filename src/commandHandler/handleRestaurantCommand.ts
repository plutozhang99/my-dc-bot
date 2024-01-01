import { Response } from 'express';
import { InteractionResponseType } from 'discord-interactions';
import { fetchNearbyRestaurants } from '../utils/googlePlacesApi';
import { GoogleMapsCommandData } from '../utils/types';

export const handleRestaurantCommand = async (data: GoogleMapsCommandData, res: Response, id: String) => {
    const postalCode = data.options.find(opt => opt.name === 'postal_code')!.value;
    const style = data.options.find(opt => opt.name === 'style')!.value;

    const restaurant = await fetchNearbyRestaurants(postalCode, style);
    return res.send({
        type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
        data: {
            content: restaurant ? `<@${id}> \n You should try ${restaurant.name} at ${restaurant.address} today` : 'No restaurants found!',
        },
    });
};
