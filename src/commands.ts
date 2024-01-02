import 'dotenv/config';
import {CommandData} from "./utils/types";

const FIND_RESTAURANT_COMMAND: CommandData = {
    name: 'find_restaurant',
    description: 'Find a random restaurant based on country, postal code, and style',
    type: 1, // Type 1 is a "CHAT_INPUT" command in Discord's API
    options: [
        {
            type: 3, // Type 3 means a string
            name: 'address',
            description: 'You can enter your zip code/address to get nearby restaurants',
            required: true,
        },
        {
            type: 3, // Type 3 means a string
            name: 'style',
            description: 'The style of food (e.g., Italian, Chinese, all)',
            required: false,
        }
    ],
};


export const ALL_COMMANDS = [FIND_RESTAURANT_COMMAND];