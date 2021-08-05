const Discord = require("discord.js");
const client = new Discord.Client();

const config = require("./config.json");
const command = require("./command");

const insults = require("./insults.json")

client.on("ready", () => {
  //console.log("Beep Boop Ready"); 

  command(client, ["beep"], (message) => {
    message.channel.send("Boop");
  });

  // INSULT
  command(client, "bitch", (message)=>{

    let randomInsult = Math.floor(Math.random()*53)
    message.channel.send(insults[randomInsult])

  })

  // ROCK
  command(client, "r", (message) => {
    // generate bot choice
    let botChoice = Math.floor(Math.random()*3) + 1;
    // turn into string
    switch (botChoice) {
        case 1:
        botChoice="rock"
        break;
        case 2:
        botChoice="paper"
        break;
        case 3:
        botChoice="scissors"
        break;
        default:
            message.channel.send("another xorshift fail!")
    }
    // generate answer
    switch (botChoice) {
      case "rock":
        message.channel.send(`I choose ${botChoice}, it's a draw..`);
        message.channel.send("ಥ_ಥ");
        break;
      case "paper":
        message.channel.send(`I choose ${botChoice}, YOU LOST!`);
        message.channel.send("( ´･･)ﾉ(._.`)");
        break;
      case "scissors":
        message.channel.send(`I choose ${botChoice}, YOU WON!`);
        message.channel.send("(┬┬﹏┬┬)");
        break;
      default:
        message.channel.send("xorshift failed ._.");
    }
  });
  // PAPER
  command(client, "p", (message) => {
    // generate bot choice
    let botChoice = Math.floor(Math.random()*3) + 1;
    // turn into string
    switch (botChoice) {
        case 1:
        botChoice="rock"
        break;
        case 2:
        botChoice="paper"
        break;
        case 3:
        botChoice="scissors"
        break;
        default:
            message.channel.send("another xorshift fail!")
    }
    // generate answer
    switch (botChoice) {
      case "rock":
        message.channel.send(`I choose ${botChoice}, YOU WON!`);
        message.channel.send("(┬┬﹏┬┬)");
        break;
      case "paper":
        message.channel.send(`I choose ${botChoice}, it's a draw...`);
        message.channel.send("ಥ_ಥ");
        break;
      case "scissors":
        message.channel.send(`I choose ${botChoice}, YOU LOST!`);
        message.channel.send("( ´･･)ﾉ(._.`)");
        break;
      default:
        message.channel.send("xorshift failed ._.");
    }
  });
  //SCISSORS
  command(client, "s", (message) => {
    // generate bot choice
    let botChoice = Math.floor(Math.random()*3) + 1;
    // turn into string
    switch (botChoice) {
        case 1:
        botChoice="rock"
        break;
        case 2:
        botChoice="paper"
        break;
        case 3:
        botChoice="scissors"
        break;
        default:
            message.channel.send("another xorshift fail!")
    }
    // generate answer
    switch (botChoice) {
      case "rock":
        
        message.channel.send(`I choose ${botChoice}, YOU LOST!`);
        message.channel.send("( ´･･)ﾉ(._.`)");
        break;
      case "paper":
        message.channel.send(`I choose ${botChoice}, YOU WON!`);
        message.channel.send("(┬┬﹏┬┬)");
        break;
      case "scissors":
        message.channel.send(`I choose ${botChoice}, it's a draw....`);
        message.channel.send("ಥ_ಥ");
        break;
      default:
        message.channel.send("xorshift failed ._.");
    }
  });

});

client.login(config.token);