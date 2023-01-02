const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');
const Pagination = require('discord-paginationembed');

module.exports = class AnimeCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'manga',
      aliases: ['mang'],
      group: 'anime',
      memberName: 'manga',
      description: 'Replies with the Manga info',
      throttling: {
        usages: 2,
        duration: 10
      },
       args: [
        {
          key: 'text',
          prompt: ':thinking: What manga would you like to search?',
          type: 'string',
          validate: function validateText(text) {
            return text.length < 50;
          }
        }
      ]
    });
  }

  async run(message, { text }) {
    
    try {
      const response = await fetch(
        `https://kitsu.io/api/edge/manga?filter[text]=${text}`
      ); 
     
      const json = await response.json();
      const articleArr = [];
      const anime = json.data[0] 
  

    const embed = new MessageEmbed()
        .setColor('#FF2050')
        .setTitle(anime.attributes.titles.en_jp)
        .setDescription(anime.attributes.synopsis)
        .setThumbnail(anime.attributes.posterImage.large)


    return message.channel.send({ embed });

  
    } catch (e) {
      message.reply(':x: Something failed along the way!');
      return console.error(e);
    }
  }
};
