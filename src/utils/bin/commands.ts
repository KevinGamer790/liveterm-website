// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';
const main = ("./main.mp3");
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
Welcome to my void lol!
- Just a lil woof woof
- any/all
More about me:
'sumfetch' - short summary.`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
give me money if u want (pls don't i'll feel bad(i mean hey free valorant skins ig)):
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact

export const neofetch = async (args: string[]): Promise<string> => {
  return `
  ██████████████████  ████████   guest@kara
  ██████████████████  ████████   ------------------------------- 
  ██████████████████  ████████   OWOS: Manjaro Linux x86_64 
  ██████████████████  ████████   Howst: Desktop-SPMQC3R
  ████████            ████████   Kewnel: 5.15.25-1-MANJARO 
  ████████  ████████  ████████   UwUptime: 45 secs 
  ████████  ████████  ████████   Pwackages: 1091 (pacman), 8 (snap) 
  ████████  ████████  ████████   Shwell: bash 5.1.16 
  ████████  ████████  ████████   Wesowution: 1920x1080 @ 75.00Hz 
  ████████  ████████  ████████   DE: Xfce 4.16 
  ████████  ████████  ████████   WM: Xfwm4 
  ████████  ████████  ████████   Thweme: Matcha-sea [GTK2], Adwaita [GTK3] 
  ████████  ████████  ████████   CPUwU: Intel i7-6700 (4) @ 3.408GHz 
  ████████  ████████  ████████   GPUwU: Nvidia Geforce RTX 2070
                                 Memowy: 1227MiB / 24576MiB 
                                 Locwal IP: 192.168.0.1 
                                 Pubwic IP: 76.76.21.21
  
`;
};

export const rm = async (args: string[]): Promise<string> => {
  if (args[0] == "-rf" && args[1] == "/") {
    window.close()
    return 'bye'
  }
  else {
    return 'user \'guest\' is not permitted to do this action, this incident will be reported.\ntry: rm -rf /';
  }
};

export const su = async (args: string[]): Promise<string> => {
  return `no.
`;
};



export const music = async (args: string[]): Promise<string> => {
  main;
  return 'Playing: TUNIC (Original Soundtrack) - 50 Flux Is On / Lifeformed × Janice Kwan';
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
  window.open(`https://discord.gg/zNFxq4QEy2${args.join(' ')}`);
  return `Opening Californya...`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {
  return `
besties (not directories fuck you L):
bailey (@ilyRaluu)
traffic (@trafficfocks)
will (@mrwitherguy)
kaha (@luvkaha)
leaf (@gaymrow)
goldy (@Goldensliv)`;
};

export const cd = async (args: string[]): Promise<string> => {
  return `unfortunately, i cannot afford more directories.
if you want to help, you can type 'donate'.`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};

export const vi = async (args: string[]): Promise<string> => {
  return `woah, you still use 'vi'? just try 'vim'.`;
};

export const vim = async (args: string[]): Promise<string> => {
  return `'vim' is so outdated. how about 'nvim'?`;
};

export const nvim = async (args: string[]): Promise<string> => {
  return `'nvim'? too fancy. why not 'emacs'?`;
};

export const emacs = async (args?: string[]): Promise<string> => {
  return `you know what? just use vscode fuck you.`;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://i.hateithere.xyz/', '_blank'); // ...I'm sorry
  return `L rip bozo you aren't getting root anyways if you want root go get a manjaro image from bestie goldy`;
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
