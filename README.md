# Ruma Discord Bot

A modular Discord bot built with **Discord.js v14** and modern **Node.js** practices. The codebase follows a clean, modular architecture that separates command handlers, event listeners, reusable embed builders, and utility services, ensuring scalability and maintainability.

## Features

- **Modular architecture** — command handlers, event listeners, embed builders, and external services are separated into dedicated directories with single-responsibility modules.
- **Discord.js v14 API compatibility** — built against the latest stable Discord.js API, including `SlashCommandBuilder` and the interaction-based command flow.
- **Standardized configuration management** — all sensitive values and runtime settings are managed via environment variables loaded with `dotenv`.

## Prerequisites

Ensure the following are installed and available before proceeding:

| Requirement         | Description                                                                                                                       |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| Node.js             | v18.0.0 or higher (LTS recommended)                                                                                               |
| npm                 | Node Package Manager (bundled with Node.js)                                                                                       |
| Discord Application | A registered application with a Bot Token and Client ID ([Discord Developer Portal](https://discord.com/developers/applications)) |

## Installation and Setup

1. Clone the repository:

```bash
git clone <repository-url>
cd ruma_bot
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables. Create a `.env` file in the project root based on the provided `.env.example`:

```bash
cp .env.example .env
```

4. Populate the `.env` file with the following placeholders:

```env
DISCORD_TOKEN=your-bot-token-here
CLIENT_ID=your-application-client-id
GUILD_ID=your-target-guild-id
```

> **Note:** Never commit the `.env` file to version control. Only `.env.example` should be tracked.

## Project Structure

```text
ruma_bot/
├── commands/            # Slash commands, grouped by category
│   ├── anime/           # Anime-related commands
│   ├── info/            # Server and user information commands
│   ├── misc/            # Miscellaneous commands
│   └── reaction/        # Reaction commands
├── embeds/              # Reusable embed builders
├── events/              # Discord event listeners
│   ├── interactionCreate/
│   └── ready/
├── handlers/            # Event and command orchestrators
├── utils/               # Helpers, file loaders, and utilities
├── .env.example         # Environment variable template
├── index.js             # Application entry point
└── package.json
```

## Usage

Run the application in production mode:

```bash
npm start
```

For development, run the entry point directly:

```bash
node index.js
```

Once running, the bot registers its slash commands and listens for interactions. Invoke commands in the target guild using `/`.
