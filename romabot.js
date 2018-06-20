const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

var http = require("http");
setInterval(function() {
    http.get("http://romanobot.herokuapp.com");
}, 900000);

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
}

});

client.login("NDU4NDE4NzYxNDg2MTcyMTYw.DgnaTg.C7OHM3WMRo1Qgt1MwuI0XL2Bk1Q");
