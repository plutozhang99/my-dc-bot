# Pluto's Discord Bot

This Discord bot is designed to help users find restaurants based on their specified criteria directly within a Discord chat. It utilizes the Discord Interactions API to create an engaging user experience, allowing users to enter their preferences for country, postal code, and restaurant style to receive a recommendation for a random nearby restaurant.
More features are being developed

## Features

- **Find Restaurant**: Users can input their country, postal code, and preferred style of food to receive a restaurant suggestion.
- **Interactive Experience**: The bot provides a rich interactive experience using Discord's slash commands and message components.
- **Customizable**: Easy to extend with more commands and features as needed.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js (https://nodejs.org/en/download/)
- npm (Comes with Node.js)
- A Discord account and a bot token (https://discord.com/developers/applications)

### Installation

1. **Clone the Repository**

    ```bash
    git clone https://your-repository-url.git
    cd discord-bot
    ```

2. **Install Dependencies**

    ```bash
    npm install
    ```

3. **Setup Environment Variables**

   Create a `.env` file in the root directory and add your Discord bot token and other necessary API keys:

    ```env
    DISCORD_TOKEN=your_discord_bot_token_here
    PUBLIC_KEY=your_discord_public_key_here
    APP_ID=your_discord_app_id_here
    GOOGLE_API_KEY=your_google_places_api_key_here
    ```

### Running the Bot

1. **Start the Bot**

    ```bash
    npm start
    ```

   This will run your bot locally. Use a tool like ngrok if you need a public URL for Discord's interaction callbacks.

2. **Register Commands**

   Ensure your bot's commands are registered with Discord. This might require running a separate script depending on how you've set up your command registration.

### Use Docker to run the bot
1. **Build the image**
    ```bash
    docker build -t plutos-discord-bot .
    ```
2. **Run the image**
    ```bash
   docker run --env-file .env -d -p 3001:3001 --restart unless-stopped plutos-discord-bot
    ```
   -d means run the container in the background
   --restart unless-stopped means restart the container if it crashes or if the host machine reboots
   3006:3006 means map the container's port 3006 to the host machine's port 3006

## Usage

Once the bot is running and invited to a server:

- Use `/find_restaurant` followed by the country, postal code, and optionally the style of food to receive a restaurant suggestion.

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.

## Contact

Pluto Zhang - [@Pluto_Zhang](https://twitter.com/Pluto_Zhang)

Project Link: [plutos-discord-bot](https://github.com/plutozhang99/plutos-discord-bot)
