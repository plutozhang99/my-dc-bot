export interface GoogleMapsCommandData {
    name: string;
    options: { name: string; value: string }[];
}

export interface DiscordRequestOptions {
    method: string;
    body?: any;
    [key: string]: any;
}

export interface Command {
    name: string;
    description: string;
    options?: any[];
}
export interface CommandData {
    name: string;
    description: string;
    type: number;
    options: any[];
}