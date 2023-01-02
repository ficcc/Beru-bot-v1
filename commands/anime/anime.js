const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');
const Pagination = require('discord-paginationembed');

module.exports = class AnimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'anime',
      aliases: ['ani'],
      group: 'anime',
      memberName: 'anime',
      description: 'Replies with the Anime info',
      throttling: {
        usages: 2,
        duration: 10
      },
       args: [
        {
          key: 'text',
          prompt: ':thinking: What anime would you like to search?',
          type: 'string',
          validate: function validateText(text) {
            return text.length < 50;
          }
        }
      ]
    });
  }

  async run(message, { text }) {
    // powered by NewsAPI.org
    try {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${text}`
      ); 
     
      const json = await response.json();
      const articleArr = [];
      const anime = json.data[0] 
  

    const embed = new MessageEmbed()
        .setColor('#FF2050')
        .setTitle(anime.attributes.titles.en)
        .setDescription(anime.attributes.synopsis)
         .setThumbnail(anime.attributes.posterImage.large)
        .setImage(anime.attributes.coverImage.large);

    return message.channel.send({ embed });

  
    } catch (e) {
      message.reply(':x: Something failed along the way!');
      return console.error(e);
    }
  }
};
