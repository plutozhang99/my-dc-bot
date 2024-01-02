import fetch from 'node-fetch';
import {getEnvVar, getRandomInt} from "./utils";

// 获取API密钥一次，用于所有请求。
const API_KEY = getEnvVar('GOOGLE_API_KEY');

export async function fetchNearbyRestaurants(address: string, style: string) {
    try {
        // 构造并获取位置信息URL。
        const locationUrl = await constructLocationUrl(address);
        const locationData = await fetchJson(locationUrl);
        const location = locationData.results[0]?.geometry.location;
        console.log(location)

        // 如果没有找到位置信息，提前返回。
        if (!location) {
            throw new Error('Location not found.');
        }

        // 构造并获取附近餐馆信息URL。
        const restaurantUrl = constructRestaurantUrl(location, style);
        const restaurantData = await fetchJson(restaurantUrl);
        console.log(restaurantData)

        // 从响应中选择一个随机的餐馆。
        if (restaurantData.results.length > 0) {
            const randomIndex = getRandomInt(restaurantData.results.length)
            const place = restaurantData.results[randomIndex];
            return {
                name: place.name,
                address: place.vicinity,
            };
        } else {
            throw new Error('No restaurants found.');
        }
    } catch (error) {
        console.error(error);
        return null;  // 根据你的错误处理策略进行调整。
    }
}

async function constructLocationUrl(address: string): Promise<string> {
    return `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;
}

function constructRestaurantUrl(location: { lat: number; lng: number }, style: string): string {
    const { lat, lng } = location;
    const locationStr = `${lat},${lng}`;
    //TODO: Let user choose radius
    return style ? `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locationStr}&radius=1500&opennow=true&type=restaurant&keyword=${style}&key=${API_KEY}` : `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${locationStr}&radius=1500&type=restaurant&&key=${API_KEY}`;
}

async function fetchJson(url: string) {
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}
