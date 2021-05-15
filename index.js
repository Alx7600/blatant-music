const Discord = require("discord.js");

const ytdl = require("ytdl-core");

const Client = new Discord.Client;

const prefix = "!";

Client.login("ODQzMDQ4MDU3OTI2NDUxMjAx.YJ-LsA.0gR7AGo-rFP9cpwipY-Wh0HHgLU")

Client.on("message", message => {
    console.log("Bot: opérationnel.");
});

Client.on("message", message => {
    if(message.content.startsWith(prefix + "p")){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");
                message.reply("la musique va être jouée dans le salon.");

                if(!args[1]){
                    message.reply("met un lien pour pouvoir jouer la musique.");
                    connection.disconnect();
                }
                else {
                let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

                dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    connection.disconnect();
                });

                dispatcher.on("error", err => {
                    console.log("Erreur de dispatcher : " + err);
                });
            }
            }).catch(err => {
                message.reply("Erreur pendant la connexion : " + err)
            });
        }
        else{
            message.reply("connecte-toi dans un salon vocal pour utiliser cette commande.")
        }
    }
})

Client.on("message", message => {
    if(message.content.startsWith(prefix + "play")){
        if(message.member.voice.channel){
            message.member.voice.channel.join().then(connection => {
                let args = message.content.split(" ");
                message.reply("la musique va être jouée dans le salon.");

                if(!args[1]){
                    message.reply("met un lien pour pouvoir jouer la musique.");
                    connection.disconnect();
                }
                else {
                let dispatcher = connection.play(ytdl(args[1], { quality: "highestaudio" }));

                dispatcher.on("finish", () => {
                    dispatcher.destroy();
                    connection.disconnect();
                });

                dispatcher.on("error", err => {
                    console.log("Erreur de dispatcher : " + err);
                });
                }  
            }).catch(err => {
                message.reply("erreur pendant la connexion : " + err)
            });
        }
        else{
            message.reply("connecte-toi dans un salon vocal pour utiliser cette commande.")
        }
    }
})