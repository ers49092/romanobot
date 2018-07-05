const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

var http = require("http");
setInterval(function() {
    http.get("http://romanobot.herokuapp.com");
}, 900000);

client.on('message', message =>{
	if (message.content.toLowerCase().includes ('roast me')) {
		var choices = ['Given the fact that you are on the spamano server, it is statistically likely that you are either a furry, a gay bottom, or both. Do I really need to roast you when all of that is already happening?',
    'You look like the kind of person that would unironically wear crocs.',
    'But I love you :c','I know what shoes you have in your closet, and I disapprove of all of them.',
    'Every time you keysmash my lifespan gets shorter. I have about five minutes left at this rate...',
    'If I had a tumblr I would block you.'];
		var response = Math.floor(Math.random() * choices.length);
    message.channel.send(choices[response]);
	}
});

client.on("message", (message) => {
  if (message.content.toLowerCase().includes ("spain bot")) {
    message.channel.send(":eyes:");
  } else

  if (message.content.toLowerCase().includes ("pineapple on pizza")) {
    message.channel.send("pineapple doesn't belong on pizza, fuck off");
  } else

  if (message.content.toLowerCase().includes ("spagna")) {
    message.channel.send("amore :heart:");
  } else

  if (message.content.toLowerCase().includes ("alfie bot")) {
    message.channel.send("that bastard owes me .3 bitcoin");
  } else

  if (message.content.toLowerCase().includes ("ily romabot")) {
    message.channel.send("I love you too! :kissing_heart:");
  } else

  if (message.content.toLowerCase().includes ("vore")) {
    message.channel.send("***No.***");
  } else

  if (message.content.toLowerCase().includes ("good morning romabot")) {
    message.channel.send("Buongiorno! :heart:");
  } else

  if (message.content.toLowerCase().includes ("good night romabot")) {
    message.channel.send("Buonanotte! :heart:");
  } else

  if (message.content.toLowerCase().includes ("hewwo")) {
    message.channel.send("OwO");
  } else

  if (message.content.toLowerCase().includes ("i love you more!!!!! :two_hearts:")) {
    message.channel.send("But you love me most, right Toni?");
  } else

  if (message.content.toLowerCase().includes ("what about meeeeeeeeeeee ??")) {
    message.channel.send("Sorry, do I  know you?");
  }

});

client.login(process.env.delicioustomato);
