import { Request, Response } from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import { handleRestaurantCommand } from './commandHandler/handleRestaurantCommand';

export const interactionsHandler = async (req: Request, res: Response) => {
    const { type, data, id } = req.body;

    /**
     * Handle verification requests
     */
    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
    }


    if (type === InteractionType.APPLICATION_COMMAND) {
        console.log('handling application command');
        if (data.name === 'find_restaurant') {
            console.log('handling restaurant command');
            // return handleRestaurantCommand(data, res, id);
            const userId = req.body.member.user.id;

            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: {
                    content: `<@${userId}> No restaurants found!`,
                },
            });
        }
    }
    // Handle other interaction types if necessary
};
