import { ApplicationCommandOptionData, ApplicationCommandOptionType } from "discord.js";
import { execute } from "../../interfaces/Command";

export const name: string = "rps";
export const description: string = "Play Rock, Paper, Scissors against the bot";
export const category: string = "fun";
export const slashoptions: ApplicationCommandOptionData[] = [
    {
        name: 'choice',
        type: ApplicationCommandOptionType.String,
        description: 'Your choice: rock, paper, or scissors',
        required: true,
        choices: [
            {
                name: 'Rock',
                value: 'rock'
            },
            {
                name: 'Paper',
                value: 'paper'
            },
            {
                name: 'Scissors',
                value: 'scissors'
            }
        ]
    }
];

const outcomes = {
    rock: { win: 'scissors', lose: 'paper' },
    paper: { win: 'rock', lose: 'scissors' },
    scissors: { win: 'paper', lose: 'rock' }
};

export const run: execute = async (client, interaction, args) => {
    const userChoice = args.get('choice').value.toString();
    const botChoice = ['rock', 'paper', 'scissors'][Math.floor(Math.random() * 3)];

    let result;

    if (userChoice === botChoice) {
        result = "It's a tie!";
    } else if (outcomes[userChoice].win === botChoice) {
        result = `You win! ${userChoice} beats ${botChoice}.`;
    } else {
        result = `You lose! ${botChoice} beats ${userChoice}.`;
    }

    interaction.reply(`You chose **${userChoice}**. The bot chose **${botChoice}**. ${result}`);
};
