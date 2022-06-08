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
export const email = async (args: string[]): Promise<string> => {
  window.open(`mailto:${config.email}`);
  return `Opening mailto:${config.email}...`;
};

export const github = async (args: string[]): Promise<string> => {
  window.open(`https://github.com/${config.social.github}/`);

  return 'Opening github...';
};


// Search
export const google = async (args: string[]): Promise<string> => {
  window.open(`https://google.com/search?q=${args.join(' ')}`);
  return `Searching google for ${args.join(' ')}...`;
};

export const reddit = async (args: string[]): Promise<string> => {
  window.open(`https://www.reddit.com/search/?q=${args.join(' ')}`);
  return `Searching reddit for ${args.join(' ')}...`;
};

export const twitter = async (args: string[]): Promise<string> => {
  window.open(`https://www.twitter.com/kevinawrf${args.join(' ')}`);
  return `Opening Kara's Twitter.`;
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
besties:
bailey (@ilyRaluu)
traffic (@trafficfocks)
will (@mrwitherguy)
kaha (@luvkaha)
leaf (@gaymrow)`;
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
  window.open('https://www.youtube.com/c/MrWitherGuy', '_blank'); // ...I'm sorry
  return `L rip bozo you aren't getting root anyways go watch a mrwitherguy video`;
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
