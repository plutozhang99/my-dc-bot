import { Request, Response } from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import { handleRestaurantCommand } from './commands/handleRestaurantCommand';

export const interactionsHandler = async (req: Request, res: Response) => {
    const { type, data } = req.body;

    if (type === InteractionType.APPLICATION_COMMAND) {
        switch (data.name) {
            case 'find_restaurant':
                return handleRestaurantCommand(data, res);
            default:
                return res.send({ content: 'Unknown command' });
        }
    }
    // Handle other interaction types if necessary
};
