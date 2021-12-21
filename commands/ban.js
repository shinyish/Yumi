const Discord = require("discord.js");

module.exports = {
    name: "ban",
    description: "A moderation command that bans a person from your server.",
    category: "Moderation",
    execute(client, message, args) {
        const user = message.member

        if (user.permissions.has(Discord.Permissions.FLAGS.BAN_MEMBERS)) {
            if (args[0] && args[0].includes("<@")) {
                const target = args[0].replace(/[\\<>@#&!]/g, "")

                message.guild.members.ban(target)
                console.log("Banned")
            } else {
                message.channel.send("Invalid arguments ``y!ban {target}``")
            }
        } else {
            message.channel.send(`<@${user.user.id}> You are not allowed to run that command! Missing permission(s) BAN_MEMBERS`)
        }
    }
}