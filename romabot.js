const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

client.on("message", (message) => {
  if (message.content.toLowerCase().includes ("spamano")) {
    message.channel.send(":eyes:");
  } else

  if (message.content.toLowerCase().includes ("pineapple on pizza")) {
    message.channel.send("pineapple doesn't belong on pizza, fuck off");
  } else

  if (message.content.toLowerCase().includes ("spain")) {
    message.channel.send("amore :heart:");
  } else

  if (message.content.toLowerCase().includes ("kota")) {
    message.channel.send("Oh kin");
  } else

  if (message.content.toLowerCase().includes ("hewwo")) {
    message.channel.send("owo");
  } else

  if (message.content.toLowerCase().includes ("ily")) {
    message.channel.send("I love you too! :kissing_heart:");
  } else

  if (message.content.toLowerCase().includes ("vore")) {
    message.channel.send("***No.***");
  }
  
});

client.login("NDU4NDE4NzYxNDg2MTcyMTYw.DgnaTg.C7OHM3WMRo1Qgt1MwuI0XL2Bk1Q");
