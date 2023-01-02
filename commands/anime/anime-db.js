const { MessageEmbed } = require('discord.js');
const fetch = require('node-fetch');
const { Command } = require('discord.js-commando');
const Pagination = require('discord-paginationembed');

module.exports = class AnimCommand extends Command {
  constructor(client) {
    super(client, {
      name: 'animedb',
      aliases: ['adb'],
      group: 'anime',
      memberName: 'animedb',
      description: 'Replies with the Anime database info info',
      throttling: {
        usages: 2,
        duration: 60
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
    
    try {
      const response = await fetch(
        `https://kitsu.io/api/edge/anime?filter[text]=${text}`
      ); 
     
    const json = await response.json();
    const articleArr = [];

        for (let i = 1; i <= json.data.length; ++i) {
            articleArr.push(
             new MessageEmbed()
             .setColor('#FF2050')
             .setTitle(json.data[i-1].attributes.titles.en)
         
              .addFields(
		        { name: 'Alternative Name :', 
                  value: json.data[i-1].attributes.titles.ja_jp, inline:true},
                { name: '\u200b', 
                  value: '\u200b', 
                  inline:true},  
		        { name: 'Rating :', 
                  value: json.data[i-1].attributes.averageRating, 
                  inline: true },
		        { name: 'Status :', 
                  value: json.data[i-1].attributes.status,
                  inline: true },
                { name: 'No. of Episode :', 
                  value: json.data[i-1].attributes.episodeCount, 
                  inline: true },
                { name: 'Episode Length :', 
                  value: json.data[i-1].attributes.episodeLength, 
                  inline: true },
                 { name: 'Start Date : ', 
                  value: json.data[i-1].attributes.startDate,
                  inline: true },
                { name: 'End Date :', 
                  value: json.data[i-1].attributes.endDate, 
                  inline: true },
                { name: 'Show Type :', 
                  value: json.data[i-1].attributes.showType, 
                  inline: true },  
             )  
             .setDescription(json.data[i-1].attributes.synopsis)
             .setThumbnail(json.data[i-1].attributes.posterImage.large)
             .setFooter('Anime DB request ')
             .setTimestamp(new Date())
            );
        }
    const embed = new Pagination.Embeds()
     .setArray(articleArr)
     .setAuthorizedUsers([message.author.id])
     .setChannel(message.channel)
     .setPageIndicator(true);

      embed.build();
  
    } catch (e) {
      message.reply(':x: Something failed along the way!');
      return console.error(e);
    }
  }
};
