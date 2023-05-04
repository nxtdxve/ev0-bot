import { ApplicationCommandOptionData, ApplicationCommandOptionType } from "discord.js";
import { execute } from "../../interfaces/Command";

export const name: string = "coinflip";
export const description: string = "Flip a coin";
export const category: string = "fun";
export const slashoptions: ApplicationCommandOptionData[] = [];

export const run: execute = async (client, interaction, args) => {
    const result = Math.random() < 0.5 ? "Heads" : "Tails";

    interaction.reply(`The coin flip result is: **${result}**`);
};
