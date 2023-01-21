# A Discord Music Bot written in JavaScript by galnir(https://github.com/galnir this is the extension of older version), the discord.js library and discord.js-commando framework

### Installing the dependencies

`npm i`

### Setup

Make a config.json file in the root directory of the project and add:

- Minimum

```
{
  "prefix": "!",
  "discord_owner_id": "Your-Discord-ID",
  "token": "Your-Bot-Token",
  "youtubeAPI": "youtube-api-key"
}
```

- Full Command List

```
{
  "invite": "false",
  "prefix": "!",
  "discord_owner_id": "Your-Discord-ID",
  "token": "Your-Bot-Token",
  "youtubeAPI": "youtube-api-key",
  "geniusLyricsAPI": "genius-api-key",
  "tenorAPI": "tenor-API-key",
  "newsAPI": "news-api-key",
  "twitchClientID": "Your-Client-ID",
  "twitchClientSecret": "Your-Client-Secret",
  "rawgAPI": "rawg-api-key"

}
```

# Added Features 
## Anime Database search
  Use command anime for single search or use adb for 10 closest search
  (Using -anime command)
  ![image](https://user-images.githubusercontent.com/61610928/213840322-066b63da-cca6-4498-b88e-7097ddfa03c4.png)
  
  (Using -adb command)
  ![image](https://user-images.githubusercontent.com/61610928/213840424-498e9bc5-1315-49e0-8012-4bc17add9816.png)


  
## Nepse(Nepal Stock Exchange) search (Not working as API server has been shutdown)
  Gives you NEPSE today price
  ![image](https://user-images.githubusercontent.com/61610928/213840273-e1e01bf5-84ac-41f9-b142-50cef4aa12a0.png)

  
## Replit serverhost
  Fork it in replit and setup Uptimerobot as shown by https://www.freecodecamp.org/news/create-a-discord-bot-with-javascript-nodejs/

