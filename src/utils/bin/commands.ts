// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
// Help
export const help = async (args: string[]): Promise<string> => {
  const commands = Object.keys(bin).sort().join(', ');
  var c = '';
  for (let i = 1; i <= Object.keys(bin).sort().length; i++) {
    if (i % 7 === 0) {
      c += Object.keys(bin).sort()[i - 1] + '\n';
    } else {
      c += Object.keys(bin).sort()[i - 1] + ' ';
    }
  }
  return `Welcome! Here are all the available commands:
\n${c}\n
[tab]: trigger completion.
[ctrl+l]/clear: clear terminal.\n
Type 'sumfetch' to display summary.
`;
};



// Redirection
export const repo = async (args: string[]): Promise<string> => {
  window.open(`${config.repo}`);
  return 'Opening Github repository...';
};

// About
export const about = async (args: string[]): Promise<string> => {
  return `Heya, I'm ${config.name}. 
Welcome to my void!
| Heya! I'm Kara
| I speak English and am currently learning French
| Hobbyist web and game developer
| Massive music enjoyer
| Three time Cyberpatriot state champion
| Professional AFJROTC marksman
| My discord username is 'karawrf', feel free to add me!`;
};


// Contact


export const rm = async (args: string[]): Promise<string> => {
  if (args[0] == "-rf" && args[1] == "/") {
    window.close();
    window.close();
    window.close();
    window.close(); //please work
    return 'this cmd only works like 25% of the time I love typescript'
  }
  else {
    return 'user \'guest\' is not permitted to do this action, this incident will be reported.\ntry: rm -rf /';
  }
};

export const su = async (args: string[]): Promise<string> => {
  return `no.`;
};






// Search
export const spotify = async (args: string[]): Promise<string> => {
  window.open(`https://open.spotify.com/user/31eiw743lvsyx3avp5dk4grkgvti${args.join(' ')}`);[]
  return `Opening Kara's Spotify...`;
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://www.twitter.com/kevinawrf${args.join(' ')}`);
  return `Opening Kara's Twitter...`;
};

export const youtube = async (args: string[]): Promise<string> => {
  window.open(`https://youtube.com/c/KevinGamer790${args.join(' ')}`);
  return `Opening Kara's Youtube...`;
};

export const steam = async (args: string[]): Promise<string> => {
  window.open(`https://steamcommunity.com/profiles/76561198232790108${args.join(' ')}`);
  return `Opening Kara's Steam...`;
};

export const discord = async (args: string[]): Promise<string> => {
  return `username: karawrf - feel free to add me!, server invite: <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.discord}" target="_blank">https://discord.gg/55gxzUrfKV</a></u>`;
};

export const pronounspage = async (args: string[]): Promise<string> => {
  window.open(`https://en.pronouns.page/@Karawa${args.join(' ')}`);
  return `Opening Kara's Pronouns Page`;
};

export const spotistats = async (args: string[]): Promise<string> => {
  window.open(`https://stats.fm/karawa${args.join(' ')}`);
  return `Opening Kara's stats.fm...`;
};

export const scoresaber = async (args: string[]): Promise<string> => {
  window.open(`https://scoresaber.com/u/76561198232790108${args.join(' ')}`);
  return `Opening Kara's Scoresaber...`;
};

export const beatsaver = async (args: string[]): Promise<string> => {
  window.open(`https://beatsaver.com/profile/4287063${args.join(' ')}`);
  return `Opening Kara's Beatsaver...`;
};



// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};


export const ls = async (args: string[]): Promise<string> => {
  return `Local Disk (C:) ███████████▒░░ 81%\nGoogle Drive (D:) ███░░░░░░░░░░░░░░░░░ 15%\nDATA (E:) ███████████▒░░░░ 71%\nSSD1TB (F:) ██████████████░░░░░░ 70%
`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories...`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const sudo = async (args?: string[]): Promise<string> => {
  return `yeah... you're gonna need 'su'`;
};

export const friends = async (args: string[]): Promise<string> => {
  return `
friend (@"Twitter Handle Here", "website"):
bailey (@ilyRaluu, <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.ralu}" target="_blank">https://ralu.carrd.co</a></u>)
salju (@SaljuBoi)
traffic (@trafficfocks)
will (@mrwitherguy)
kaha (@luvkaha)
leaf (@gaymrow)
goldy (@Goldensliv, <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.goldy}" target="_blank">https://i.hateithere.xyz</a></u>)
kiki (@Kikicat1234, <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.kiki}" target="_blank">https://kikicat123.ca</a></u>)
`;
};


// Banner
export const banner = (args?: string[]): string => {
  return `
  █████   ████                                ██            █████   █████           ███      █████
  ░░███   ███░                                ███           ░░███   ░░███           ░░░      ░░███ 
   ░███  ███     ██████   ████████   ██████  ░░░   █████     ░███    ░███   ██████  ████   ███████ 
   ░███████     ░░░░░███ ░░███░░███ ░░░░░███      ███░░      ░███    ░███  ███░░███░░███  ███░░███ 
   ░███░░███     ███████  ░███ ░░░   ███████     ░░█████     ░░███   ███  ░███ ░███ ░███ ░███ ░███ 
   ░███ ░░███   ███░░███  ░███      ███░░███      ░░░░███     ░░░█████░   ░███ ░███ ░███ ░███ ░███ 
   █████ ░░████░░████████ █████    ░░████████     ██████        ░░███     ░░██████  █████░░████████
  ░░░░░   ░░░░  ░░░░░░░░ ░░░░░      ░░░░░░░░     ░░░░░░          ░░░       ░░░░░░  ░░░░░  ░░░░░░░░ 
                                                                                                                                                            

Type 'help' to see the list of available commands.
Type 'sumfetch' to display summary.
Type 'repo' or click <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.repo}" target="_blank">here</a></u> for the Github repository.
`;
};
