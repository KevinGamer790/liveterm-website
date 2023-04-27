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
- Just a lil woof woof
- AFJROTC marksman, #7 in the branch
- Three time Cyberpatriot state champion
- Always down to make new friends and talk^^
More about me:
'sumfetch' - short summary.`;
};

// Donate
export const donate = async (args: string[]): Promise<string> => {
  return `thank you for your interest. 
give me money if u want (pls don't i'll feel bad(i mean hey free money tyty)):
- <u><a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.paypal}" target="_blank">paypal</a></u>
`;
};

// Contact

export const neofetch = async (args: string[]): Promise<string> => {
  return `
  ██████████████████  ████████   guest@kara
  ██████████████████  ████████   ------------------------------- 
  ██████████████████  ████████   OS: Manjaro Linux x86_64 
  ██████████████████  ████████   Host: Desktop-SPMQC3R
  ████████            ████████   Kernel: 5.15.25-1-MANJARO 
  ████████  ████████  ████████   Uptime: 45 secs 
  ████████  ████████  ████████   Packages: 1091 (pacman), 8 (snap) 
  ████████  ████████  ████████   Shell: bash 5.1.16 
  ████████  ████████  ████████   Resoution: 1920x1080 @ 75.00Hz 
  ████████  ████████  ████████   DE: Xfce 4.16 
  ████████  ████████  ████████   WM: Xfwm4 
  ████████  ████████  ████████   Theme: Matcha-sea [GTK2], Adwaita [GTK3] 
  ████████  ████████  ████████   CPU: Intel i7-6700 (4) @ 3.408GHz 
  ████████  ████████  ████████   GPU: Nvidia Geforce RTX 2070
                                 Memory: 1227MiB / 24576MiB 
                                 Local IP: 192.168.0.1 
                                 Public IP: 76.76.21.21
  
`;
};

export const rm = async (args: string[]): Promise<string> => {
  if (args[0] == "-rf" && args[1] == "/") {
    window.close();
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
  return `Kara#0007`;
};

export const tumblr = async (args: string[]): Promise<string> => {
  window.open(`https://at.tumblr.com/karawa/hdw58xln54so${args.join(' ')}`);
  return `Opening Kara's Tumblr...`;
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

export const avatar = async (args: string[]): Promise<string> => {
  if (args[0] == "Y" || args[0] == "y") 
  {
    window.open(`https://downgit.github.io/#/home?url=https://github.com/KevinGamer790/liveterm-website/blob/main/downloads/Kara.KaraAvatar.rar`);
    return 'Thank you for taking interest, I hope you enjoy playing as Kara!';
  }
  else {
    return 'Would you like to download my Bonelabs avatar? <u><a href= "https://downgit.github.io/#/home?url=https://github.com/KevinGamer790/liveterm-website/blob/main/downloads/Kara.KaraAvatar.rar" target="https://downgit.github.io/#/home?url=https://github.com/KevinGamer790/liveterm-website/blob/main/downloads/Kara.KaraAvatar.rar">Click here</a></u> or type \'avatar Y\' to download!';
  }
};

export const ls = async (args: string[]): Promise<string> => {
  return `
besties (@"Twitter Handle Here"):
bailey (@ilyRaluu)
salju (@SaljuBoi)
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

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://i.hateithere.xyz/', '_blank'); // ...I'm sorry
  return `if you want root go get a manjaro image from bestie goldy`;
};

export const taffy = async (args: string[]): Promise<string> => {
  return `
  @@@                                                                                           
  @%%%%%%%@@                                                                                       
@%%%%%%%%%%%%@                                  @@@@@                                              
@%%%%@@%%%%%%%%%@                           @@%%%%%%%%%@                                            
@%%%%@   @%%%%%%%%@           @@          @%%%%%%%%%%%%%%@                                           
@%%%%%@     %%%%%%%%%@        @%%@      @&%%%%%%%%@@%%%%%%%@                                          
@%%%@@@    %%@@@%%&@@@@@&@@@@ @%%%%@  @%%%%%%%%@     @%%%%%@                                          
@&%%@      @%%%%%%%%%%%%%%%%%%&%%%%%@%%%%%%%%@       @%%%%%%@                            @@@%%%@      
@&&&&@*@%%%%@@%%%%%%%%%%%%%%%%%%%%%@%%%%%%&          @%%%%%%@                      @@%%%%%%%%%%%@     
.@&@%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%@%%%%%&           @%%%%%%@  ..             @&%%%%%%%%%%%@@%%%@     
.#*%%%%%%%%%%%%######%%%%%%%%%%%%&&&%%%%%%%%&         @%%%%%%%@%//%         @%&%%%%%%%%%%@*,,,,@%%@     
#******%%%%%%%%%%#######%%#%%%%%%%%%%%%%%%%%%&%%@         .@%%%%%%%%@///%  %%*******@%%%%%%%%@,,,,,,,@%%&     
#******%%%%%%%%%%%%%%##%%%%%%%%%%%%%%%%/,#%%%%%@........%%%%%%%%%@///%***********@%%%%%%@******,,,@%%@      
#@@***&%%%%%%%%@%%%%@%%%%%%%%%%%%%%%%%%%%%%%%%@@@%%%@%%%##%%%@(///***********@&&&&&@*******,,,*&%%@      
@&@@*%%%%@@@@%%@%%%@%%%%@%%%%%%%%%%%%%%%%%%%%%%%@%%%%%%%%%%@((((/***************@@%%@*******,,@%%@       
#*****@@((%@@@@#@%%%%%%@%%%%%%%%@%%%%%@%%%%%%%%%%%@%%%%%%%@(((((((**********,,********%%******@%%@        
,&@@***#(%%%@%(#@@@&&%%%%%%@@@@@@@@@%%%%%%%%%%%%%%%%%%%%%%@(((*********/,,**********%/*****@%%%@        
@@(#@....((  (@&%%%%%%@((@@,,,,%%%@%%%%%%%%%%%%%%%%%%%%@(***((*******,,********%%*/*****@%%&@         
#,,,,,,,&  %  (//%%@@%,%@@%@(@....%(((%(%@%%%%%%%%%&%%%%%%@@*****************************%**@&%%@           
#,,,,,,,,,  @@  %(((@@       @ %    (//  %%(%@%@@@@@@@     %******************************%/*@&&&&@            
.###(,,        &            @ (   %**%%%%%@            %////****************#%/****/(****@&&&&&&&&#          
#,,,,....     *%%%%%%@       @@ ,( %,,,*@@          .%((///////*/%///*****%*****/********@&&&&&&@            
(,,,,..      .@&&&&&@          %@@@@                   %//%////%///////**/#%/**********/*****%             
,#,,,,,.  &    @.           .                       %/////////////////////****************%               
&&&*,,,*&.&&          &.                      %%//////////%//////////&&&&&&&&&&         *%            
&(((*,/&&&&&      &&&&                         %((//////&&&&&&/////////&                      %          
&(((((((((////&           %%%%,,,,,*,,/%%%%%%,,(((/&&.        //////////%                   %            
&((((((((////////#/%%#//////#////%%%&@*,,,,,                     ////@@@@@@               /%              
&&((((((((((/////////&*%,,,,,,/%%,,@%%%%%%@#,,,,.                    %%%%%%&@            %%                 
&((((((((((((///////////&&/#,,,,,,,%%%%@,,,,,...... ..          &        @@@    &   ,     (,%                
&(((((((((((((//*,,////////&#,@%%%%%%%%%%@&,,,,,........         &        &&&&&   &///////&/,&               
@##@(((((((((((&(///////////////@%%%%%%%%%%%@@%@&&&&&@,,,,,,,,,       & //***&%   ///////////,,&               
%#%%%%@(((((((((((((//////////////////@@@@@%%%%%@@@@%(&&////////((((#&(     ,&(   &///////,.///,&                
@#%%%%%%%@(((((((((((((&//////////////////////////////////////////////((((((&&&&&//////////////,,@%%@             
@%%%%%%%%@%%@(((((((////(((&//////////////////////////////////////////////////////////////////(%%%%%@%%@           
@%%,/%%%%@%%%%&@(((((//////(((((&#///////////////////////////////////////////////////////@%%%%%%&&%%%%%@%@          
@%%%%%%%%@%%%##%%%@((((/////////(((((((#&(////////////////////(&&(((((///////////////////@%%%%%%%%@%%%%%@%%@         
&%%%%%%%%@%%%%%%%%%@@((((((/////////&((((((((((((((((((((((((((((((&//////*,*/////////@@%%%@%%%%%%%%%%%%@%%%@        
@%%%%%%%%@%%%%%%%%%@,//@(((((((((((///////&#(((((((((((((((((((#&////////////////////(@&&&&%%%%%%%%%%%%%%@%%%@        
@%%%%%%%%%@%%%%%%%%%%,,,///@@(((((((((.(((///////%&(((((((&&/////////////////////////&&@&&&&&&&&&%%%%%%%%%%@@%%@       
@%%%%%%%%%%@%%%%%%%%%,,,,,,,//@%@@((((((((((((((((///////////////////////////////&&/////(@&&&&&&&&&&&&&%%%%@%%@%%@      
@%%%%%%%%%%%&%%%%%%%%@,,,,,,,,%#%%%%%%@&&#(((((((((((((((/(&(%%%%%%%@////////&&///////////((&&&&&&&&&,&&&&&@%%@&%%%@     
@%%%@((#@         &@%%*,,,,,,,,@%%##%%%%%%@(((((&&&&(((((@%%%%%%%&%%%%%%&@////////////////@@  @&&&&&&&&&&@&&&&@%%%%%(,.   
@((@@##@              @,,,,,,,,,@%%%%%###%%%%@@(((((((((@&&&&%%%%%%%%%%%%%%@///////////(@((&(% %@&@@@@&&&&@&@&&&&&&%%%%%@  
(%%%@%%#@              # @, #       @@%%%%###%&((((@@((((@&&&&&&&&&&&&&&%%@@@((((////#@((((////%  ((@&&&@@@&&&&&&&&&&%&&&&%@.
%%%&@%%%@               @             @###@%@@@(((((((#&&&&&&&&&&&&&&&&&&&&&&&&(#@@ #(//  &&   /  %(@&&&&&&&&&&&&&###&&####&%
%%%@%%%%@           # ,,@ #(        @%###%%##%%%%@(((@@&&&&@&&&&&&&&&&&&&&&&&&@&(/. %//  &&    /% @&@&&&&&&&&&&&&&&&&&&&&&#&&
%%%%&@%%%.          ,@%            @%%%@@/,*#%%%%%%@&&&@&&&&&&@.,&&&&&&&&&&&@&&&(/  @(////////&&@ @&&&@&&&&&&&&&#&#%%&###&#&&

                                        Art by @Sir_Blunt on Twitter
                                              
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
Type 'pronounspage' to view my Pronouns Page.
`;
};
