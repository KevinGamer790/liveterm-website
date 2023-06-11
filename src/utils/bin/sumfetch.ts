import config from '../../../config.json';

const sumfetch = async (args: string[]): Promise<string> => {
  if (config.ascii === 'cveinnt') {
    return `                                                  
                    sumfetch: summary display
                     -----------
                    ABOUT
                    ${config.name}
                   ﰩ ${config.ps1_hostname}
                    <u><a href="${config.resume_url}" target="_blank">resume</a></u>
                   爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>
                     -----------
                    CONTACT 
                    <u><a href="mailto:${config.email}" target="_blank">${config.email}</a></u>
                    <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
                    <u><a href="https://linkedin.com/in/${config.social.linkedin}" target="_blank">linkedin.com/in/${config.social.linkedin}</a></u>
                     -----------
                    DONATE 
                    <u><a href="${config.donate_urls.paypal}" target="_blank">${config.donate_urls.paypal}</a></u>
                    <u><a href="${config.donate_urls.patreon}" target="_blank">${config.donate_urls.patreon}</a></u>

`;
  } else { 
    return `
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&#B&&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BGGPG#&@@@@@@@@@@@@@@@@@@@@@@@@&&&###BBBBBBB#&&@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&BGGGGGGG#&@@@@@@@@@@@@@@@@&&##BBGGGGGGGGGGGGGGGGGB&@@@@@@@@@@@@
    GY#B##&&&@@@@@@@@@@@@@@@@@@@@@@@@@&#GGGGGGGGGG#&@@@@@@@@@@&&#BBGGGGGGGGGGGGGGGGGGGGGGGGG#&@@@@@@@@@@
    ! GBPGGGGGBBB###&&&&&&@@@@@@@@@@@&#GGGGGGGGGGGGB&@@@@@@&#BGGGGGGGGGGGGGGGGGBBBBGGGGGGGGGG&@@@@@@@@@@
    . ^B#GGGGGGGGGGGGGGGGGGBBBBB###&&&GGGGGGGGGGGGGGG#&@&BGGGGGGGGGGGGGGGGBGP5Y?!^YBGGGGGGGG#&@@@@@@@@@@
      ?^Y#BGGGGGGGGGGGGGGGGGPPPPPGGGG&GGGGGGGGGGGGGGGGGBGGGGGGGGGGGGGGGGGB#GPPG:   J5GBBB###&@@@@@@@@@@@
      Y. :YBBGGGGGGGGBBBBBBBBBBBGGGGG#BGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBBB5~  .Y7 .^!7!^P@@@@@@@@@@@@
      5^ ~7Y#&GGGGGG#PYYYYYYYYY555Y5YY5GGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#Y?~:  :7P!       :&@@@@@@@@@@@@
      J7 P&BGGGGGGG&Y!!!!!!!!!!!!7?Y5PGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGB#5    .?YJJ7      Y&@@@@@@@@@@@@
      ^P :G&BGGGGGG&?!!!!!!??JY5PGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG#G!       ^G7     :#@@@@@@@@@@@@@
    ^  JJ  7G##BBGG#B7!!!!!PGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBG?:  ^7YY^      J&@@@@@@@@@@@@@
    Y   Y?   :!?YG&GB#PJ77!?PGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGBBPJ7!:       :#&@@@@@@@@@@@@@
    #:  .YG7     7&GPGBBB#PYPGGGGGGGGGPPPPPPPPPGGGGGGGGGGGGGGGGGGGGGGGGGGB#J^           Y&@@@@@@@@@@@@@@
    &Y !P!^:     :##GGGB#BYYPGPPPP55555YYYY5GGGGGGGGGGGGGGGGGGGGBBGGGGGGGGGBY^         ^&@@@@@@@@@@@@@@@
    @&7.?J~:.  .  !###G#BYYY55YYYYYYYYY5PGBBGGGGGGGGGGGGGGGGB##PYYPB#BGGGGGGB#P~      .G&&&@@@@@@@@@@@@@
    @@&? .~77?7JJ  .^:7#5YYYYYYYYYY55PB##BGGGGGGGGGGGGGGGGB#GP&^   .7##GGGGGGGB&?  ^?YY?~^:Y&@@@@@@@@@@@
    @@@&5^      ?57!!~#PYYYYYYY55PGGPB?YGB#GGGGGGGGGGGGGG#G5J?P:     :B#GGGGG##P!~YY!.     J&@@@@@@@@@@@
    @@@@@&P7^. !5JPP?GBY5555PGGPY7^ .77J7J5#GPPPPPPPPPPGBJ!!~~Y:      7&GGGGGGBPJJ:       .B@@@@@@@@@@@@
    @@@@@@@@&#P&?  .~J5G##B&B~:     ^#J^ :~#PP55YYYY55PGB?^ .!&~      ^&BGGGGGGJ:         ?&@@@@@@@@@@@@
    @@@@@@@@@@@&?      .^7G#:       ^#!  .^#P5?7??7?JJ5P#!. .!B~      !&GGGPYJ~          .B@@@@@@@@@@@@@
    @@@@@@@@@@@@5         !B.        G?...^#P?7JJ??J?J5P#!:.:^#~      5BY?~.             7&@@@@@@@@@@@@@
    @@@@@@@@@@@@#.         7!        5B777J&J~~7~^^^^~!7BP????P.      ^.                 G@@@@@@@@@@@@@@
    @@@@@@@@@@@@&!                   :Y??77!            .~!!~:                ..:^^^:.  ~&@@@@@@@@@@@@@@
    @@@@@@@@@@@@@5       ...                                                .:^~~~!7JYY!5@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@&~ :!?JJ?7~:                    ..                                   ^J#@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@&PY?~.                      ?PJ7?PY                                   .Y&@@@@@@@@@@@@@
    @@@@@@@@@@@@&G7:                          ^P7 :P!                                     !#@@@@@@@@@@@@
    @@@@@@@@@@@G~                              .7JJ^                 ..::^^~~~~~~~~~~^::.  ^B&@@@@@@@@@@
    @@@@@@@@@&Y::~!77???JJ???77!~^:..                        .^~7J5PGB##&&@@@@@@@@@@@&&&#GP?J#@@@@@@@@@@
    @@@@@@@@@&#&@@@@@@@@@@@@@@@@@@&##GP5J?!~:..         .~?YG#&@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&&@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&Y?Y55555YYJJYY5Y?~J&@@@@@@@@@@@@@@@@@@@@@@@@@@&@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@&J     .:^^~~^~!.   .P&@@@@@@@@@@@@@@@@@@@&&##BGB@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@&#&@@@@@@@@@@@@@@@@&#P?:           :75GY     ^7Y5G#&&&&&&&####BBGGGGPGB&@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@#GGGBB##&&&&&###BBJ~^^^^^:.      ~JJ7.:&~         !GBBBBBGGGPPGGGGGGG#&@@@@@@@@@@@@@@@@@
    @@@@@@@@@@@@&GPGGGGGGGGGGGPGB#GP5YYYY5PY:    ..   ?&^      ^7????77?JYPBBBGGGGGGGGB&&@@@@@@@@@@@@@@@
    @@@@@@@@@@@@@&BGGGGGGGGGGB##P?^.      .!PY:      .?YYJ: .7Y7~.         .~?PBBGGGGGGGGB#&@@@@@@@@@@@@
    @@@@@@@@@@@@@@&#GGGGGGG##G7:             JB!       .!GP?P7.                :?G#BGGGGGGGGG#&@@@@@@@@@
    @@@@@@@@@@@@@&#GGGGGG##5^                 7&! .^7JYJ7!GY.                    .!G#GGGGGGGGB&@@@@@@@@@
    @@@@@@@@@@@@&BGGGGGB&5^    .               Y&: ::.   PJ                .Y:      ?##GGGB&&@@@@@@@@@@@
    @@@@@@@@@@&#GPGGGG&B!    .5!     .    ^^   ~&!      7B  ..    .:      ~BJ        ^G&GB&@@@@@@@@@@@@@
    @@@@@@@@@&#BB##&&&5.     .#!     J?   ^B^  Y&^      Y5 ~5:   :B~    :YB7          .P&&@@@@@@@@@@@@@@
    @@@@@@@@@@@@@@@@&Y        !BJ:   :#?   ?G~P#!       !B.B!    J#   ^YBY.            :B&@@@@@@@@@@@@@@                                                                              
                                  Art by @114_dusty on Twitter
     sumfetch: summary display                            
    -----------                           
     ABOUT                            
     ${config.name}                              
    ﰩ She/They/He                            
    爵 <u><a href="${config.repo}" target="_blank">Github repo</a></u>                             
    -----------                            
     CONTACT                           
     <u><a href= "https://twitter.com/kevinawrf" target="https://twitter.com/kevinawrf">@kevinawrf on twitter</a></u> | use the 'twitter' command                    
     <u><a href="https://discord.gg/CnGXWCHHX5" target="https://discord.gg/CnGXWCHHX5">My Emote Server & My Username</a></u> | use the 'discord' command                               
    -----------                                                     
                                            
`;
  }
};

export default sumfetch;
