const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('854160088427135008')
    .setType('STREAMING')
    .setURL('https://twitch.tv/developer') //Must be a youtube video link 
    .setState('♡')
    .setName('♡')
    .setDetails(`♡`)
 .setAssetsLargeImage('https://cdn.discordapp.com/attachments/1179932579810525275/1186731620829515906/IMG_8902.jpg?ex=659450f2&is=6581dbf2&hm=0e21096f13916a1eaab9224db1daa3e577a1b820797f2db07951131fa4098034&') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/attachments/1179932579810525275/1186731500515893290/IMG_8900.png?ex=659450d6&is=6581dbd6&hm=04640cdff1b59c5007aa242a952115f2cb3e228652885c3cb8c49420256a55c6&') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('꒰ა ♡ ໒꒱')

                        //Text when you hover the Small image
    .addButton('♡','https://youtu.be/GVZqDCG2VrA?si=7Ys3eiTTFqB53kLQ')
    .addButton('♡','https://youtu.be/p8FDl_tMs4Y?si=btWpNH0wuLrM3_x2');

  client.user.setActivity(r);
  client.user.setPresence({ status: "offline" }); //dnd, online, idle, offline

  
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
