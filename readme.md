<!--
                                                                                                                                              ,-.----.       ,----..       ,----..
    ,---,                                                                    ,----..                                           ___            \    /  \     /   /   \     /   /   \
  .'  .' `\                                                                 /   /   \                                        ,--.'|_          |   :    \   /   .     :   /   .     :
,---.'     \   __  ,-.                        ,---.        ,---,           /   .     :            ,--,                       |  | :,'         |   |  .\ : .   /   ;.  \ .   /   ;.  \
|   |  .`\  |,' ,'/ /|            ,----._,.  '   ,'\   ,-+-. /  |         .   /   ;.  \         ,'_ /|             .--.--.   :  : ' :         .   :  |: |.   ;   /  ` ;.   ;   /  ` ;
:   : |  '  |'  | |' | ,--.--.   /   /  ' / /   /   | ,--.'|'   |        .   ;   /  ` ;    .--. |  | :    ,---.   /  /    '.;__,'  /          |   |   \ :;   |  ; \ ; |;   |  ; \ ; |
|   ' '  ;  :|  |   ,'/       \ |   :     |.   ; ,. :|   |  ,"' |        ;   |  ; \ ; |  ,'_ /| :  . |   /     \ |  :  /`./|  |   |           |   : .   /|   :  | ; | '|   :  | ; | '
'   | ;  .  |'  :  / .--.  .-. ||   | .\  .'   | |: :|   | /  | |        |   :  | ; | '  |  ' | |  . .  /    /  ||  :  ;_  :__,'| :           ;   | |`-' .   |  ' ' ' :.   |  ' ' ' :
|   | :  |  '|  | '   \__\/: . ..   ; ';  |'   | .; :|   | |  | |        .   |  ' ' ' :  |  | ' |  | | .    ' / | \  \    `. '  : |__         |   | ;    '   ;  \; /  |'   ;  \; /  |
'   : | /  ; ;  : |   ," .--.; |'   .   . ||   :    ||   | |  |/         '   ;  \; /  |  :  | : ;  ; | '   ;   /|  `----.   \|  | '.'|        :   ' |     \   \  ',  /  \   \  ',  /
|   | '` ,/  |  , ;  /  /  ,.  | `---`-'| | \   \  / |   | |--'           \   \  ',  . \ '  :  `--'   \'   |  / | /  /`--'  /;  :    ;        :   : : ___  ;   :    /___ ;   :    /
;   :  .'     ---'  ;  :   .'   \.'__/\_: |  `----'  |   |/                ;   :      ; |:  ,      .-./|   :    |'--'.     / |  ,   /         |   | :/  .\  \   \ .'/  .\ \   \ .'
|   ,.'             |  ,     .-./|   :    :          '---'                  \   \ .'`--"  `--`----'     \   \  /   `--'---'   ---`-'          `---'.|\  ; |  `---`  \  ; | `---`
'---'                `--`---'     \   \  /                                   `---`                       `----'                                 `---` `--"           `--"
                                   `--`-'
 -->

Projet Dragon Quest en POO

    A propos de ce projet

Ce projet est mon premier de manière complétement autonome, pendant ma formation à la Wild Code School. J'ai tenté de reproduire une partie courte de Dragon Quest, un jeu de rôle au tour par tour avec des monstres variés et beaucoup d'aléatoire, dans les comportements des personnages ou simplement du programme afin de m'entrainer à la Programmation Orienté Objet.

    Pour lancer une partie

Pour lancer une partie de Dragon Quest P.O.O, lancer un terminal puis la commande "node index.js"
Le resultat de votre partie va s'afficher entièrement dans votre console.

    Les fonctionnalités de Dragon Quest P.O.O

Le projet propose plusieurs fonctionnalités, découvrons les ensemble :

- Characters
  Characters est le constructor principal du projet, qui permet de créer nos héros et les monstres

- Items
  items est le constructor secondaire du projet qui nous laisse créer les objets : les épées, les boucliers et les aliments

- visitingLands()
  une fonction qui permet au Héros et à son groupe de découvrir un nouveau lieu à chaque lancement parmi un tableau de lieux définis

- fight()
  une fonction qui permet à un héros ou à un monstre de combattre. La gestion des dégats prends en compte les équipements disponibles pour les héros

- recruitaRandomHero()
  une fonction pour recruter de nouveaux héros dans le groupe du Héros de la Lumière. Le recrutement se fait à partir d'un tableau qui contient les héros créés et est complétement aléatoire. On ne se retrouve donc pas avec la même équipe à chaque partie

- lootGeneration()
  cette fonction simule les célébres écrans de victoire où les héros récuperent de l'or et de l'équipement sur les corps des monstres et boss. Comme beaucoup d'autres fonctions, il s'agit ici d'un aléatoire qui va de 0 à 99 et va ensuite comparer sa valeur à un tableau de résultat, offrant ainsi au héros un objet.
  La fonction prends en compte la race du monstre, indiqué dans son constructor, pour choisir la bonne "table" de loot.
  Le héros est aussi capable d'utiliser l'objet gagné s'il s'agit d'un aliment, lui redonnant de la vie, ou de l'équiper s'il s'agit dune arme ou un bouclier mais à condition qu'il soit meilleur que son équipement actuel.

- loottable.js
  loottable gère les tables de loot utilisées par lootgeneration()

- gameOver() et gameClear()
  avec ces deux fonctions, on peut obtenir une phrase de fin de combat et de jeu. gameOver prends en compte un héros et trois monstres, gameClear prends deux tableaux en argument.

- giftingSwordorShield()
  j'ai developpé cette fonction pour offrir au héros, après le premier combat, un bouclier ou une épée. Le type d'objet est choisi aléatoirement et le héros ne l'équipera que s'il n'en a pas déjà un ou une d'équipé ou si son équipement actuel n'est pas au niveau de celui offert.

- randomNumberGeneration()
  Afin de générer facilement un aléatoire en fonction de la longueur d'un tableau et pour ne pas se répéter, randomNumberGeneration() peut être appelé

  Me contacter
  pour me contacter, rien de plus simple : quentinverwaerde at yahoo dot com
  mon linkedin : https://www.linkedin.com/in/quentin-verwaerde-54520a20/

  Remerciements

  Merci à Sébastien @https://github.com/Lambseb et Pierre @https://github.com/PierreA44 pour leur aide sur le débogage de début de projet, sans vous je n'aurais jamais vaincu le Dragon Millénaire aux yeux vitreux !
