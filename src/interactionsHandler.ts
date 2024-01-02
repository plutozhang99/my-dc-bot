import { Request, Response } from 'express';
import { InteractionType, InteractionResponseType } from 'discord-interactions';
import { handleRestaurantCommand } from './commandHandler/handleRestaurantCommand';

export const interactionsHandler = async (req: Request, res: Response) => {
    const { type, data } = req.body;

    /**
     * Handle verification requests
     */
    if (type === InteractionType.PING) {
        return res.send({ type: InteractionResponseType.PONG });
    }


    if (type === InteractionType.APPLICATION_COMMAND && data.name === 'find_restaurant') {
        console.log('Handling restaurant command');
        const userId = req.body.member.user.id;  // 获取用户ID
        const address = data.options.find((opt: { name: string; }) => opt.name === 'address')!.value;  // 获取地址
        const style = data.options.find((opt: { name: string; }) => opt.name === 'style')?.value || '';  // 获取风格
        try {
            // 获取内容从handleRestaurantCommand
            const content = await handleRestaurantCommand(address, style, userId);
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: { content },
            });
        } catch (error) {
            console.error('Error handling restaurant command:', error);
            // 发送错误消息或默认消息
            return res.send({
                type: InteractionResponseType.CHANNEL_MESSAGE_WITH_SOURCE,
                data: { content: `<@${userId}> \n An error occurred while finding restaurants.` },
            });
        }
    }

    // Handle other interaction types if necessary
};