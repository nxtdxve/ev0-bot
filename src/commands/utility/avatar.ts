import { ApplicationCommandOptionData, ApplicationCommandOptionType } from "discord.js";
import { execute } from "../../interfaces/Command";

export const name: string = "avatar";
export const description: string = "Display a user's avatar in full size";
export const category: string = "utility";
export const slashoptions: ApplicationCommandOptionData[] = [
    {
        name: 'user',
        type: ApplicationCommandOptionType.User,
        description: 'The user whose avatar you want to display (optional)',
        required: false
    }
];

export const run: execute = async (client, interaction, args) => {
    const user = args.get('user')?.user || interaction.user;

    const embed = {
        color: 0x0099ff,
        title: `${user.tag}'s Avatar`,
        description: `[Avatar URL](${user.displayAvatarURL({ size: 2048 })})`,
        image: {
            url: user.displayAvatarURL({ size: 2048 })
        },
        footer: {
            text: `Requested by ${interaction.user.tag}`,
            icon_url: interaction.user.displayAvatarURL()
        }
    };

    interaction.reply({ embeds: [embed] });
};
