import { ApplicationCommandOptionData, ApplicationCommandOptionType } from "discord.js";
import { execute } from "../../interfaces/Command";

export const name: string = "userinfo";
export const description: string = "Get information about a user";
export const category: string = "utility";
export const slashoptions: ApplicationCommandOptionData[] = [
    {
        name: 'user',
        type: ApplicationCommandOptionType.User,
        description: 'The user you want to get information about',
        required: true
    }
]

export const run: execute = async (client, interaction, args) => {
    const user = args.get('user').user;
    const member = interaction.guild.members.cache.get(user.id);

    const embed = {
        color: 0x0099ff,
        title: `${user.tag}'s Information`,
        thumbnail: {
            url: user.displayAvatarURL()
        },
        fields: [
            {
                name: 'User ID',
                value: user.id
            },
            {
                name: 'Created At',
                value: user.createdAt.toLocaleDateString(),
                inline: true
            },
            {
                name: 'Joined At',
                value: member.joinedAt.toLocaleDateString(),
                inline: true
            },
            {
                name: 'Roles',
                value: member.roles.cache.map(role => role.toString()).join(', ')
            }
        ],
        timestamp: new Date().toISOString(),
        footer: {
            text: `Requested by ${interaction.user.tag}`,
            icon_url: interaction.user.displayAvatarURL()
        }
    };

    interaction.reply({ embeds: [embed] });
};
