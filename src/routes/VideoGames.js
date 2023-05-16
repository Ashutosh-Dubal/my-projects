import React from "react";
import "../Styling/ShowMorebttn.css";

const VideoGame = ({ title, content }) => {
    const [expanded, setExpanded] = React.useState(false);
  
    return (
      <div>
        <li>
          <h3>{title}</h3>
        </li>
        <p>
          {expanded ? content : `${content.slice(0, 200)}...`}
        </p>
        <button
          className="show-more-button"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Show less ▲" : "Show more ▼"}
        </button>
      </div>
    );
  };

  const VideoGames = () =>{
    return(
        <div className='show-more'>
            <ol>
                <VideoGame 
                title="Ghost of Tsushima"
                content={`Ghost of Tsushima is an action-adventure game developed by Sucker Punch 
                Productions and published by Sony Interactive Entertainment. The game is set on 
                the island of Tsushima during the Mongol invasion of Japan in the 13th century. 
                The player takes on the role of Jin Sakai, a samurai warrior who must fight to 
                liberate the island from the Mongol forces.

                The game is visually stunning, with beautiful landscapes and environments that 
                make exploring the island a joy. The combat system is smooth and satisfying, 
                with a variety of weapons and techniques to master. Players can choose to fight 
                as a traditional samurai or adopt a stealthy, more ninja-like approach. The game 
                also has an engaging storyline with well-developed characters that are easy to invest in.
                
                One of the standout features of the game is its use of the "wind" as a 
                navigation tool. Instead of relying on a minimap or compass, the player can 
                follow the direction of the wind to reach their destination. This adds a unique 
                and immersive element to the game that makes it stand out from other open-world games.
                
                Overall, Ghost of Tsushima is a fantastic game that offers a unique take on the 
                open-world genre. The combination of stunning visuals, satisfying combat, and 
                engaging storyline make it a must-play for fans of action-adventure games.`}
                />

                <VideoGame
                title="God of War III"
                content={`"God of War III" is an epic action-adventure game that follows the 
                story of Kratos, a former Spartan warrior turned Greek god, as he seeks revenge 
                against the gods of Olympus. The game features stunning graphics and intense 
                combat, with Kratos wielding a variety of weapons and magical abilities to take 
                down powerful enemies.

                One of the standout features of "God of War III" is its boss battles, which 
                are some of the most epic and memorable in gaming history. Each boss is unique, 
                with its own strengths and weaknesses, and requires careful strategy and 
                quick reflexes to defeat.
                
                The game also has a compelling story, with Kratos' quest for vengeance 
                taking him through a variety of stunning environments inspired by Greek 
                mythology. The game's narrative is enhanced by strong voice acting and cinematic 
                cutscenes that help to bring the characters and world to life.
                
                Overall, "God of War III" is an exceptional game that showcases the best of 
                what action-adventure gaming has to offer. With its intense combat, breathtaking 
                visuals, and epic story, it's a must-play for any fan of the genre.`}
                />
                
                <VideoGame
                title="God of War: Ghost of Sparta"
                content={`"God of War: Ghost of Sparta" is a fantastic addition to the God of War 
                franchise. The game follows Kratos as he embarks on a journey to uncover his 
                past and to save his brother, Deimos. The story is well-crafted and the gameplay 
                is just as enjoyable as in previous God of War games.

                The combat system is fluid and satisfying, with a wide variety of weapons and 
                combos to choose from. The graphics and sound design are also impressive, 
                especially considering the game was released on the PSP.
                
                One downside is that the game is relatively short, with a playtime of around 
                6-8 hours. However, the quality of the game makes up for the length.
                
                Overall, "God of War: Ghost of Sparta" is a must-play for fans of the series 
                and anyone looking for a great action-adventure game on the PSP.`}
                />

                <VideoGame
                title="God of War 4"
                content={`"God of War" is an action-adventure game developed by Santa Monica 
                Studio and published by Sony Interactive Entertainment. It follows the story 
                of Kratos, a former Greek god seeking revenge on the gods who betrayed him, 
                as he battles his way through mythical creatures and challenges.

                The game is well-known for its engaging combat mechanics, immersive story, 
                and stunning visuals. The use of a single camera angle and no cuts throughout 
                the game adds to the cinematic feel of the game, making the experience all 
                the more enjoyable.
                
                In addition to the combat, the game also features puzzles and exploration 
                elements that keep the gameplay fresh and exciting. The relationship between 
                Kratos and his son, Atreus, is also a standout aspect of the game, adding a 
                layer of depth and emotion to the storyline.
                
                Overall, "God of War" is a must-play for fans of action-adventure games, 
                and a great entry point for those who are new to the genre. It's an excellent 
                addition to the franchise and a testament to the developers' dedication to 
                creating a memorable gaming experience.`}
                />
                
                <VideoGame
                title="God of War Ragnarok"
                content={`God of War Ragnarok is an upcoming action-adventure game developed 
                by Santa Monica Studio and published by Sony Interactive Entertainment. It 
                is the sequel to the 2018 game God of War and continues the story of Kratos 
                and his son Atreus as they navigate the Norse realm and battle mythological 
                creatures and gods.

                The game features stunning graphics and immersive gameplay, with an emphasis 
                on exploration and combat. Players can expect a rich storyline, dynamic 
                characters, and challenging boss battles. While specific details about the 
                game are still scarce, it has generated a lot of excitement among fans of 
                the franchise.
                
                Overall, God of War Ragnarok was an amazing game and it lives up to the hype.`}
                />

                <VideoGame
                title="Horizon"
                content={`Horizon is an action role-playing game developed by Guerrilla Games. 
                Set in a post-apocalyptic world where robotic creatures roam the earth, the game 
                follows the journey of Aloy, a skilled hunter and archer, as she sets out to 
                uncover the truth about her past and the fate of humanity.

                One of the standout features of Horizon is its beautiful open world, filled 
                with diverse landscapes and visually stunning graphics. The gameplay is also 
                highly enjoyable, with a focus on hunting and combat that requires strategic 
                thinking and precision. The story is engaging and well-written, with a sense of 
                mystery and intrigue that keeps the player engaged throughout.
                
                Overall, Horizon is a must-play for fans of action and RPG games, offering a 
                unique and immersive world with memorable characters, exciting gameplay, and 
                a captivating story.`}
                />

                <VideoGame
                title="Horizon Zero Dawn"
                content={`Horizon Zero Dawn is a stunning open-world action game set in a 
                post-apocalyptic world where humanity is no longer the dominant species. The 
                player takes on the role of Aloy, a young hunter who seeks to uncover the truth 
                behind her mysterious past and the secrets of the world she inhabits.

                The game features a rich and immersive storyline, with well-written characters 
                and a deep lore that keeps the player engaged throughout. The combat system is 
                one of the game's strongest points, with a variety of weapons and tools at the 
                player's disposal, each with their own strengths and weaknesses.
                
                The game's world is breathtakingly beautiful, with vast landscapes and 
                breathtaking vistas that showcase the game's stunning graphics and art design. 
                The world is also filled with a variety of robotic creatures that roam the 
                landscape, each with its own behavior patterns and weaknesses that the player 
                must exploit to succeed.
                
                Overall, Horizon Zero Dawn is an exceptional game that combines stunning 
                visuals, engaging combat, and a compelling story to create an unforgettable 
                experience. If you're a fan of action-adventure games, this is definitely one 
                to check out.`}
                />

                <VideoGame
                title="Need for Speed"
                content={`"Need for Speed" is a popular racing video game franchise that has 
                been around since 1994. It has gone through many iterations over the years, 
                with each new release bringing updated graphics, improved gameplay mechanics, 
                and new features.

                Overall, the "Need for Speed" games are known for their fast-paced, high-octane 
                racing action, with a wide variety of cars and tracks to choose from. The games 
                also offer a lot of customization options, allowing players to tune and upgrade 
                their vehicles to suit their racing style.
                
                While some of the more recent "Need for Speed" games have received mixed reviews, 
                the franchise as a whole remains a popular choice among racing game enthusiasts. 
                With its engaging gameplay, realistic graphics, and variety of vehicles and tracks, 
                "Need for Speed" is a great choice for anyone looking for a fun and exciting racing 
                experience.`}
                />

                <VideoGame
                title="Need for Speed: Most Wanted"
                content={`"Need for Speed: Most Wanted" is an exciting racing game that offers 
                players a chance to compete in high-speed car chases and race through the 
                streets of an open-world environment. The game features an extensive car selection, 
                each with its unique strengths and weaknesses, and allows players to customize 
                their vehicles to their liking. The graphics are stunning, with detailed car 
                models and impressive environments that showcase the game's vast open world.

                One of the most impressive aspects of the game is the police chases, which are 
                thrilling and challenging. The police are relentless in their pursuit of the player, 
                using a variety of tactics to bring them down. These chases are an excellent 
                addition to the game, adding an extra layer of excitement and intensity.
                
                The game's soundtrack is also noteworthy, with a diverse selection of songs 
                that perfectly complement the high-speed action. Overall, "Need for Speed: Most Wanted" 
                is a thrilling and action-packed racing game that is sure to provide hours of 
                entertainment for players who enjoy the genre.`}
                />

                <VideoGame
                title="Need for Speed: Hot Pursuit"
                content={`"Need for Speed: Hot Pursuit" is a racing video game that offers a 
                thrilling experience of high-speed chases between racers and police. The game 
                features a variety of cars and allows players to engage in both single-player 
                and multiplayer modes. One of the standout features of the game is its stunning 
                graphics and realistic sound effects, which truly immerses the player in the 
                racing experience.

                The game also features a unique Autolog system, which allows players to 
                compete with their friends and other players online. This feature adds an 
                element of competition and socialization to the game, making it more engaging 
                and challenging.
                
                Overall, "Need for Speed: Hot Pursuit" is a must-play for racing game 
                enthusiasts. With its intense chases, diverse car selection, and advanced 
                gameplay mechanics, it offers an exciting and immersive racing experience that 
                keeps players hooked for hours on end.`}
                />

                <VideoGame
                title="Need for Speed Heat"
                content={`"Need for Speed Heat" is a racing game that combines arcade-style 
                driving with a serious story mode. The game is set in Palm City, a fictional 
                open-world inspired by Miami, and offers both day and night racing experiences. 
                During the day, players participate in sanctioned races to earn money and 
                reputation, while at night, they compete in illegal street races to build 
                their street cred.

                The graphics and car models are impressive, and the customization options 
                for vehicles are extensive, allowing players to create their own unique 
                racing machine. The game also features a diverse range of music tracks that 
                fit well with the high-speed racing action.
                
                However, some players may find the story mode a bit predictable, and the 
                police chases can be frustrating at times. Despite these minor flaws, 
                "Need for Speed Heat" is a fun and exhilarating racing game that delivers 
                an exciting experience for fans of the genre.`}
                />

                <VideoGame
                title="Hitman 2"
                content={`"Hitman 2" is an excellent game that delivers on all fronts. The 
                game's mechanics allow for a level of creativity that few other games offer, 
                as players can take on missions in multiple ways, using disguises and 
                weapons to take out targets. The game's graphics are stunning, and the 
                levels are well-designed, with multiple ways to approach each mission. 
                The game also features a great soundtrack and voice acting, which helps to 
                immerse players in the game's world. Overall, "Hitman 2" is a fantastic 
                game that offers an unparalleled level of player choice and is a must-play 
                for fans of the series and the stealth genre.`}
                />

                <VideoGame
                title="Spec Ops: The Line"
                content={`"Spec Ops: The Line" is a third-person military shooter game that 
                tells a mature and emotional story. The game is set in a ruined Dubai, 
                where you play as Captain Martin Walker who leads a Delta Force team on 
                a mission to rescue Colonel John Konrad. The game's story takes unexpected 
                turns, presenting players with difficult choices and moral dilemmas that 
                affect the outcome of the story.

                Gameplay-wise, "Spec Ops: The Line" is similar to other third-person 
                shooters, with a cover system and a variety of weapons to choose from. 
                The game's levels are designed to encourage players to use their environment 
                to their advantage, with destructible elements that can alter the battlefield.
                
                The game's visuals are impressive, showcasing the ruined beauty of Dubai's 
                sand-covered skyscrapers and abandoned buildings. The game's soundtrack 
                is also noteworthy, with haunting and atmospheric music that sets the 
                tone for the game's story.
                
                Overall, "Spec Ops: The Line" is a thought-provoking and emotional game 
                that stands out among other military shooters with its mature storytelling 
                and moral ambiguity.`}
                />

                <VideoGame
                title="Call of Duty: World at War"
                content={`"Call of Duty: World at War" is a first-person shooter game set 
                in World War II. It was released in 2008 and was the fifth installment in 
                the Call of Duty series. The game features both single-player and 
                multiplayer modes.

                In the single-player mode, players take on the role of soldiers in the 
                Pacific and European theaters of war. The game features intense and gritty 
                combat, with a variety of weapons and equipment at the player's disposal. 
                The story is engaging and immersive, with a strong emphasis on the horrors 
                of war.
                
                The multiplayer mode is fast-paced and highly competitive, with a variety 
                of game modes and maps to choose from. The game also features a 
                cooperative mode, which allows players to team up and fight against waves 
                of enemy soldiers.
                
                Overall, "Call of Duty: World at War" is an excellent addition to the 
                Call of Duty series. The game's intense combat and engaging story make for 
                a memorable experience, and the multiplayer mode provides endless hours 
                of entertainment.`}
                />

                <VideoGame
                title="Call of Duty: Modern Warfare 2"
                content={`"Call of Duty: Modern Warfare 2" is a first-person shooter video 
                game released in 2009 as a part of the Call of Duty franchise. The game 
                follows the story of a Task Force 141 led by Captain Price and Sergeant 
                Soap MacTavish, as they work to stop a Russian ultranationalist from 
                causing a global war. The game features a single-player campaign, a 
                cooperative mode, and a multiplayer mode, with various maps and game modes.

                The game received widespread critical acclaim for its engaging storyline, 
                thrilling gameplay, and stunning visuals. It also set a record-breaking 
                sales record upon its release. "Call of Duty: Modern Warfare 2" is 
                considered a classic of the FPS genre and a fan favorite for many gamers.`}
                />

                <VideoGame
                title="Call of Duty: Black Ops"
                content={`"Call of Duty: Black Ops" is a first-person shooter game that was 
                released in 2010. The game is set during the Cold War era and follows 
                the story of Alex Mason, a CIA agent who is sent on various covert operations 
                to stop a Soviet plot.

                The game's single-player campaign is well-crafted, with an engaging 
                storyline and intense action sequences that keep the player on the edge 
                of their seat. The game also features a robust multiplayer mode with 
                various game modes and customization options that offer hours of 
                replayability. The graphics and sound design are top-notch and add to 
                the immersive experience of the game.
                
                Overall, "Call of Duty: Black Ops" is a great addition to the Call of Duty 
                franchise and one that fans of the series will enjoy. The game's engaging 
                storyline, fast-paced action, and varied gameplay make it a must-play for 
                first-person shooter fans.`}
                />

                <VideoGame
                title="Call of Duty Black Ops 2"
                content={`"Call of Duty Black Ops 2" is a first-person shooter video game 
                developed by Treyarch and published by Activision. The game is set in the 
                near future and features both single-player and multiplayer modes.

                The single-player campaign takes place in two different time periods, the 
                1980s and 2025, and follows the story of David Mason as he tries to 
                uncover a global conspiracy. The campaign features a branching storyline 
                and multiple endings, giving players a sense of choice and consequence.
                
                The multiplayer mode includes traditional modes such as Team Deathmatch 
                and Domination, as well as new modes like Hardpoint and Kill Confirmed. 
                The game also introduced a new feature called "Pick 10," which allows 
                players to choose their own custom loadout of weapons, perks, and equipment.
                
                Overall, "Call of Duty Black Ops 2" received positive reviews for its 
                engaging story, varied gameplay, and innovative multiplayer features. 
                It is considered one of the best games in the "Call of Duty" series and 
                a must-play for fans of first-person shooters`}
                />

                <VideoGame
                title="Call of Duty: Black Ops Cold War"
                content={`"Call of Duty: Black Ops Cold War" is the latest addition to the 
                popular first-person shooter franchise. Set in the 1980s, the game follows 
                a CIA operative and a team of agents as they attempt to stop a Soviet spy 
                known as Perseus from starting a nuclear war with the United States.

                One of the strengths of the game is its single-player campaign, which 
                features a well-written story with plenty of twists and turns. The missions 
                take players to a variety of locations around the world, from the streets of 
                East Berlin to the jungles of Vietnam. The gameplay is solid, with tight 
                controls and a good mix of stealth and action.
                
                The multiplayer mode is also a highlight, with a range of maps and game 
                modes to keep players engaged. The new Combined Arms mode, which features 
                larger maps and vehicles, is a particular standout. The graphics and sound 
                design are top-notch, with impressive attention to detail in both the 
                visuals and audio.
                
                Overall, "Call of Duty: Black Ops Cold War" is a worthy addition to the 
                franchise. While it may not reinvent the wheel, it delivers a solid and 
                entertaining experience that will satisfy both fans and newcomers alike.`}
                />

                <VideoGame
                title="Call of Duty: Vanguard"
                content={`"Call of Duty: Vanguard" is a first-person shooter game developed 
                by Sledgehammer Games and published by Activision. It was released in 
                November 2021 for PlayStation 4, PlayStation 5, Xbox One, Xbox Series X/S, 
                and Microsoft Windows.

                The game is set during World War II and features a single-player campaign 
                mode as well as multiplayer modes such as team deathmatch, domination, and 
                more. The multiplayer mode includes a new feature called Champion Hill, 
                which is a round-robin style tournament where players compete to be the 
                last team standing.`}
                />


                <VideoGame
                title="Uncharted: A Theif's end"
                content={`Uncharted 4 is an action-adventure game that delivers a thrilling 
                and immersive gaming experience. The game features incredible graphics 
                and animations that bring the characters and environments to life. The 
                story follows Nathan Drake, a treasure hunter, and his quest to find a 
                legendary pirate treasure while facing challenges and enemies along the way.

                The gameplay is a combination of exploration, puzzle-solving, and combat. 
                The combat is fast-paced and intense, and the use of cover and strategy is 
                necessary to survive. The puzzles are challenging but not overly difficult, 
                and they require a combination of observation, logic, and critical 
                thinking to solve.
                
                One of the strengths of Uncharted 4 is its characters. The main characters 
                are well-developed and have their unique personalities and motivations. 
                The voice acting is excellent, and the dialogue is engaging and witty, 
                adding to the overall experience.
                
                Overall, Uncharted 4 is an exceptional game that offers a cinematic and 
                immersive adventure that is both challenging and rewarding. It is a must-play 
                for fans of action-adventure games and is considered one of the best games 
                of the last decade.`}
                /> 

                <VideoGame
                title="Uncharted: The Lost Legacy"
                content={`"Uncharted: The Lost Legacy" is a standalone expansion to the 
                popular "Uncharted" series, and it delivers an action-packed adventure set 
                in India. The game follows treasure hunter Chloe Frazer and mercenary 
                Nadine Ross as they team up to track down an ancient artifact, facing 
                dangerous enemies and challenging puzzles along the way.

                The game features stunning graphics and immersive gameplay, with the same 
                high-quality storytelling that the "Uncharted" series is known for. The 
                chemistry between Chloe and Nadine is also a highlight, as their banter 
                and interactions provide moments of humor and heart amidst the intense action.
                
                Overall, "Uncharted: The Lost Legacy" is a must-play for fans of the 
                series and newcomers alike, offering a thrilling and satisfying experience 
                that showcases the best of what the "Uncharted" franchise has to offer.`}
                /> 

                <VideoGame
                title="Ratchet: Deadlocked"
                content={`Ratchet: Deadlocked is an action-packed game that is a part of the 
                Ratchet & Clank series. In this game, players control Ratchet, a Lombax 
                mechanic, as he is forced to participate in a series of deadly battles. 
                The game has a unique feature where Ratchet is joined by a team of combat 
                bots that provide backup in fights.

                One of the strengths of the game is its engaging storyline that keeps players 
                hooked until the very end. The gameplay is also very enjoyable, with a good 
                mix of shooting, platforming, and puzzle-solving elements. The game has a 
                variety of weapons and gadgets that can be upgraded, providing a great sense 
                of progression.
                
                The graphics and sound design are top-notch, with the game making great use 
                of its sci-fi setting. The voice acting is also great, with the characters 
                being well-written and fleshed out. The game is a bit short, but it is well 
                worth playing, especially for fans of the Ratchet & Clank series. Overall, 
                Ratchet: Deadlocked is a fun and entertaining game that is sure to keep 
                players engaged from start to finish.`}
                /> 

                <VideoGame
                title="Ratchet & Clank: Size Matters"
                content={`Ratchet & Clank: Size Matters is a fun and engaging platformer 
                game that was released for the PlayStation Portable (PSP) in 2007. The game 
                is set after the events of "Going Commando" and "Up Your Arsenal", and 
                follows Ratchet and Clank as they travel to the "Technomite" dimension to 
                find Clank's lost memory.

                The game features the classic Ratchet & Clank gameplay mechanics, such as 
                exploration, puzzle-solving, and combat, with some new elements and weapons 
                added to the mix. The graphics and sound are impressive for a PSP game, and 
                the controls are smooth and responsive.
                
                One downside of the game is that it's relatively short compared to other 
                Ratchet & Clank games, and some players may find the difficulty level to 
                be too easy. However, the game is still a great addition to the series and 
                offers an enjoyable experience for fans of the franchise, especially for 
                those who want to play on-the-go with their PSP.`}
                /> 

                <VideoGame
                title="Secret Agent Clank"
                content={`"Secret Agent Clank" is a spin-off game in the "Ratchet & Clank" 
                series that focuses on Clank as the protagonist. The game features Clank as 
                a secret agent who is tasked with stopping a notorious criminal mastermind 
                named Klunk from taking over the galaxy.

                The gameplay of "Secret Agent Clank" includes a mix of platforming, combat, 
                and puzzle-solving elements. As Clank, players have access to a variety of 
                gadgets and weapons that they can use to take down enemies and navigate 
                through levels.
                
                One of the highlights of the game is the ability to play as other characters 
                besides Clank, including Ratchet and Captain Qwark. The game also features 
                a fun mini-game called "Gadgebot" where players can control a group of tiny 
                robots to solve puzzles and collect bolts.
                
                Overall, "Secret Agent Clank" is a fun and entertaining addition to the 
                "Ratchet & Clank" series. While it may not be as polished as some of the 
                mainline entries in the series, it still offers plenty of enjoyable gameplay 
                and humor that fans of the series will appreciate.`}
                /> 

                <VideoGame
                title="Ratchet and Clank Rift Apart"
                content={`Ratchet and Clank Rift Apart is a beautifully crafted 
                action-adventure game that is a true showcase of the power of the 
                PlayStation 5. The game follows the iconic duo, Ratchet and Clank, as they 
                navigate through different dimensions to stop a nefarious plot by the evil 
                Dr. Nefarious.

                The graphics in this game are absolutely stunning, with vibrant colors and 
                detailed environments that really bring the game to life. The game also takes 
                advantage of the PS5's features, such as the haptic feedback and adaptive 
                triggers, which make the gameplay feel even more immersive.
                
                The combat in Rift Apart is fast-paced and exciting, with a variety of 
                weapons to choose from, each with their own unique abilities and upgrades. 
                The game also introduces a new mechanic where Ratchet can shift between 
                different dimensions, allowing for creative and unique ways to solve puzzles 
                and traverse the environment.
                
                Overall, Ratchet and Clank Rift Apart is an excellent addition to the 
                Ratchet and Clank franchise and a must-play for any fan of action-adventure 
                games.`}
                /> 


                <VideoGame
                title="Deathloop"
                content={`"Deathloop" is an immersive first-person action-adventure game 
                that takes place on the mysterious island of Blackreef. The game follows 
                Colt, an assassin stuck in a never-ending time loop, as he tries to break 
                the cycle and escape the island. The game's unique mechanic allows players 
                to relive the same day over and over again, providing an opportunity to 
                learn from their mistakes and try out new strategies. The game's blend of 
                stealth, combat, and time-looping mechanics make it an exciting and 
                unpredictable experience. The graphics are stunning, the gameplay is 
                smooth, and the story is captivating, making "Deathloop" an excellent 
                addition to the gaming world. If you're a fan of immersive storytelling, 
                action-packed gameplay, and unique mechanics, "Deathloop" is definitely 
                worth checking out.`}
                /> 

                <VideoGame
                title="Assassin’s Creed Brotherhood"
                content={`Assassin’s Creed Brotherhood is an action-adventure video game 
                that takes place in Rome during the Renaissance period. The game follows 
                the story of Ezio Auditore da Firenze, who is now a master assassin, as 
                he works to stop the Templars' plans to take control of Rome.

                One of the standout features of the game is the introduction of the 
                Brotherhood system, which allows players to recruit and train other 
                assassins to help them in their missions. The player can call upon these 
                assassins to assist them in combat or to perform stealthy assassinations.
                
                The game also features a large open-world environment to explore, 
                with various side missions and activities to complete. The combat 
                system has been improved from the previous game, with new weapons and 
                assassination techniques to master.
                
                Overall, Assassin’s Creed Brotherhood is a great addition to the franchise, 
                with its unique Brotherhood system and improved gameplay mechanics. The game 
                offers a satisfying conclusion to Ezio's story while setting up future 
                1events in the series.`}
                /> 

                <VideoGame
                title="Assassin's Creed Revelations"
                content={`Assassin's Creed Revelations is the fourth installment in the 
                popular Assassin's Creed franchise. In this game, players take on the role 
                of Ezio Auditore da Firenze, the legendary Assassin, as he travels to 
                Constantinople to uncover the secrets of his order and the ancient city.

                The game introduces several new features, including the Hookblade, which 
                allows players to traverse the city more quickly and easily. The combat 
                system has also been refined, with new animations and a greater focus on 
                strategy.
                
                One of the main strengths of Assassin's Creed Revelations is its story. 
                The game weaves together the stories of several characters, including 
                Ezio and the enigmatic Altair. The narrative is engaging and well-written, 
                with plenty of twists and turns to keep players invested.
                
                In terms of gameplay, Assassin's Creed Revelations is a solid entry in 
                the series. The open-world design allows for plenty of exploration, and 
                the addition of new features like the Hookblade keeps things fresh. The 
                game also includes a robust multiplayer mode, which adds to the overall 
                replay value.
                
                Overall, Assassin's Creed Revelations is a worthy addition to the franchise. 
                The story is engaging, the gameplay is fun and varied, and the new 
                features add to the overall experience. Fans of the series will definitely 
                want to give this game a try.`}
                /> 

                <VideoGame
                title="Assassin's Creed III"
                content={`Assassin's Creed III is a historical action-adventure game that 
                takes place during the American Revolution. The game is the fifth installment 
                in the Assassin's Creed series, and it follows the story of a new 
                protagonist, Connor Kenway, a half-Mohawk, half-British assassin who fights 
                for freedom and justice.

                The game features an open-world environment, where players can explore 
                various cities and environments, interact with non-playable characters, 
                complete missions, and engage in combat. The game introduces new gameplay 
                mechanics, such as hunting and naval warfare, which add a new level of depth 
                to the gameplay.
                
                The graphics and sound design in Assassin's Creed III are impressive, with 
                stunning visuals and realistic sound effects that help to immerse players 
                in the game's world. The story is also engaging, with interesting characters 
                and a well-written narrative that keeps players engaged throughout the game.
                
                Overall, Assassin's Creed III is an excellent addition to the series, with 
                an engaging story, immersive gameplay, and impressive graphics and sound 
                design. It's definitely worth playing for fans of the series or anyone 
                looking for an action-packed adventure game set in a historical setting.`}
                /> 

                <VideoGame
                title="Assassin’s Creed IV: Black Flag"
                content={`Assassin’s Creed IV: Black Flag is an action-adventure video game 
                that takes place during the Golden Age of Piracy in the Caribbean. The game 
                follows the story of Edward Kenway, a young pirate and privateer who becomes 
                embroiled in the ancient conflict between the Assassins and the Templars.

                The game features an open-world environment that allows players to explore 
                a vast and detailed representation of the Caribbean, including multiple 
                islands, cities, and naval battlefields. Players can engage in a variety 
                of activities, including sailing, hunting, looting, and engaging in naval 
                combat.
                
                One of the standout features of the game is its naval combat system, which 
                allows players to command their own ship and engage in epic sea battles 
                against other ships and fortresses. The ship's upgrades and customization 
                options add a layer of strategy to the gameplay, as players can choose which 
                weapons and abilities to equip their ship with based on their playstyle.
                
                Overall, Assassin’s Creed IV: Black Flag is a thrilling and immersive 
                experience that combines historical accuracy with the swashbuckling adventure 
                of a pirate's life. Its engaging story, detailed world-building, and 
                thrilling naval combat make it one of the best entries in the Assassin's 
                Creed franchise.`}
                /> 

                <VideoGame
                title="Horizon Zero Dawn"
                content={`Horizon Zero Dawn is an action role-playing game developed by 
                Guerrilla Games and released in 2017. The game is set in a post-apocalyptic 
                world where humans live in primitive tribes and robotic creatures roam the 
                land.

                The game's protagonist is Aloy, a young woman who was outcast from her tribe 
                as a baby and raised by an adoptive father who taught her how to hunt and 
                survive. Aloy sets out on a journey to uncover the truth about her past and 
                the world she lives in.
                
                One of the most impressive aspects of the game is its world-building. The 
                game is set in a vast open world that is both beautiful and dangerous, with 
                various biomes that each have their own unique challenges and creatures to 
                overcome. The robotic creatures are a highlight of the game, as each one has 
                its own distinct abilities and weaknesses that must be exploited in order 
                to defeat them.
                
                The gameplay is a mix of exploration, combat, and crafting. Aloy has a 
                variety of weapons and tools at her disposal, such as a bow and arrow, traps, 
                and a device that can hack into the robotic creatures to turn them into 
                allies. The combat is challenging but satisfying, as players must learn the 
                weaknesses of each enemy in order to take them down.
                
                Overall, Horizon Zero Dawn is a fantastic game that offers a unique and 
                immersive world to explore, challenging gameplay, and a compelling story 
                with well-developed characters. It's a must-play for fans of action RPGs 
                and open-world games.`}
                /> 

                <VideoGame
                title="Spider-Man (2018)"
                content={`"Spider-Man" is a fantastic action-adventure game that puts players 
                in the shoes of everyone's favorite web-slinger. Developed by Insomniac 
                Games and released exclusively on the PlayStation 4, this game offers a 
                thrilling and immersive experience that truly captures the essence of 
                Spider-Man.

                The game's story follows an experienced Peter Parker as he tries to balance 
                his personal life with his duties as Spider-Man. Players get to swing 
                through the streets of New York City, take on a variety of enemies, and 
                explore a richly detailed open world.
                
                One of the game's biggest strengths is its combat system, which offers a 
                range of exciting and fluid moves that make players feel like they are really 
                in control of Spider-Man's abilities. The game also features a number of 
                interesting side quests and collectibles that add to the overall experience.
                
                Overall, "Spider-Man" is a must-play game for fans of the superhero and for 
                anyone looking for a fun and engaging action-adventure experience.`}
                /> 

                <VideoGame
                title="Spider-Man: Miles Morales"
                content={`"Spider-Man: Miles Morales" is a thrilling action-adventure game 
                that offers an immersive experience for fans of the Spider-Man franchise. 
                The game's protagonist, Miles Morales, is a relatable character whose journey 
                to become Spider-Man is both compelling and inspiring. The game features 
                an open-world environment that allows players to explore New York City while 
                completing a variety of missions and side quests. The combat system is 
                fluid and exciting, with a wide range of acrobatic moves and gadgets to use 
                against enemies. The graphics are stunning and the attention to detail is 
                impressive, creating a rich and vibrant world for players to immerse 
                themselves in. Overall, "Spider-Man: Miles Morales" is a must-play for 
                fans of the franchise and action-adventure games in general.`}
                /> 


                <VideoGame
                title="Grand Theft Auto: Vice City"
                content={`"Grand Theft Auto: Vice City" is a classic open-world 
                action-adventure game released in 2002. It is set in a fictional version of 
                Miami in the 1980s and follows the story of Tommy Vercetti, a former mobster 
                who is trying to establish his own criminal empire.

                The game's graphics, soundtrack, and overall atmosphere capture the 80s vibe 
                perfectly. The gameplay is open-ended, allowing players to explore the city, 
                complete missions, and engage in various criminal activities. The missions 
                are varied and often involve driving, shooting, and even piloting aircraft. 
                The game also includes a wide range of weapons and vehicles to choose from.
                
                The story is well-written and engaging, with several memorable characters and 
                plot twists. The voice acting is top-notch, with talented actors bringing 
                the characters to life.
                
                Overall, "Grand Theft Auto: Vice City" is a timeless classic that has aged 
                well over the years. It is a must-play for fans of the series and anyone who 
                enjoys open-world action games.`}
                /> 

                <VideoGame
                title="Grand Theft Auto: San Andreas"
                content={`"Grand Theft Auto: San Andreas" is a classic open-world game that 
                takes place in the early 1990s in a fictional version of California. The game 
                follows the story of Carl "CJ" Johnson as he returns to his hometown of 
                Los Santos to investigate the murder of his mother.

                The game offers a massive open world with plenty of activities to keep 
                players engaged for hours. The storyline is engaging and well-written, and 
                the characters are memorable. The game's soundtrack is also noteworthy, 
                with a variety of music genres that fit perfectly with the game's setting.
                
                The gameplay features a mix of driving, shooting, and hand-to-hand combat, 
                with a range of weapons and vehicles to choose from. The game also includes 
                several RPG elements, allowing players to upgrade CJ's skills and attributes 
                over time.
                
                Overall, "Grand Theft Auto: San Andreas" is a highly entertaining game with 
                plenty of replay value. It's a must-play for fans of the open-world genre 
                and the Grand Theft Auto series.`}
                /> 

                <VideoGame
                title="Grand Theft Auto IV"
                content={`Grand Theft Auto IV is an action-packed open-world game that takes 
                place in a fictionalized version of New York City. The game puts players in 
                control of Niko Bellic, an Eastern European immigrant who comes to Liberty 
                City seeking a new life. The storyline is engaging and full of twists and 
                turns, and the game's open-world environment allows for plenty of exploration 
                and side missions.

                The graphics and attention to detail are impressive, with a vast array of 
                vehicles, weapons, and characters to interact with. The game also introduces 
                a cover system that allows players to take cover behind objects during 
                shootouts, adding a layer of realism and strategy to the gameplay.
                
                Overall, Grand Theft Auto IV is a must-play for fans of the series and anyone 
                who enjoys open-world action games. It's a classic that still holds up 
                today, with a compelling story, engaging gameplay, and an immersive world to 
                explore.`}
                />  

                <VideoGame
                title="Grand Theft Auto V"
                content={`"Grand Theft Auto V" is an action-adventure game developed by 
                Rockstar North and published by Rockstar Games. The game is set in a 
                fictional city called Los Santos, which is based on Los Angeles, and it 
                follows the stories of three criminals who are trying to make it big in the 
                city's criminal underworld.

                The game's graphics and attention to detail are impressive, and the 
                open-world gameplay allows for a lot of exploration and creativity. The three 
                main characters each have their own unique personalities and storylines, 
                and the game switches between them seamlessly.
                
                The gameplay includes a mix of driving, shooting, and stealth, and the 
                player is given a lot of freedom to complete missions in their own way. The 
                game also includes an online multiplayer mode, which adds to the overall 
                longevity of the game.
                
                Overall, "Grand Theft Auto V" is a great game that offers a lot of content 
                and an immersive open-world experience. The game has received critical 
                acclaim and is one of the best-selling video games of all time, and it is 
                definitely worth playing for fans of the series or open-world games in 
                general.`}
                /> 

                <VideoGame
                title="Nier: Automata"
                content={`"Nier: Automata" is a masterpiece of a game that seamlessly blends 
                intense action, an engrossing storyline, and memorable characters into an 
                unforgettable experience. The game's fast-paced combat system keeps players 
                on their toes with each battle, while the story unfolds in an incredibly 
                imaginative and thought-provoking way.

                The game's soundtrack is also a standout feature, with hauntingly beautiful 
                melodies and catchy battle themes that complement the game's atmosphere 
                perfectly. Additionally, the game's multiple endings provide a unique sense 
                of replayability, allowing players to experience the story from different 
                perspectives.
                
                Overall, "Nier: Automata" is a must-play for anyone who enjoys action games 
                with deep and meaningful stories.`}
                /> 

                <VideoGame
                title="Mortal Kombat X"
                content={`Mortal Kombat X is a fighting game that delivers an enjoyable and 
                engaging experience for both casual and competitive players. The game 
                features an extensive roster of characters, each with unique moves and 
                fatalities that add an element of excitement to every match. The graphics are 
                impressive, and the gore and violence are over-the-top, but they fit 
                perfectly with the game's tone and style.

                The gameplay is smooth, responsive, and challenging, with a range of 
                single-player and multiplayer modes to choose from. The story mode is 
                particularly impressive, offering an engaging and cinematic experience that 
                explores the game's characters and their motivations.
                
                Overall, Mortal Kombat X is an excellent entry in the long-running fighting 
                game series, offering a well-crafted package of brutal combat, engaging 
                characters, and exciting modes. It is a must-play for any fans of the genre.`}
                /> 

                <VideoGame
                title="Mortal Kombat 11"
                content={`Mortal Kombat 11 is the latest installment in the long-running 
                fighting game series, and it's easily one of the best. The game features 
                a roster of characters that includes classic favorites like Scorpion and 
                Sub-Zero, as well as newcomers like Geras and Cetrion. The graphics and 
                animation in the game are top-notch, with each character's moves and 
                fatalities looking incredibly realistic.

                The gameplay in Mortal Kombat 11 is some of the best in the series, with a 
                focus on strategy and timing. The game's new "Fatal Blow" mechanic allows 
                players to perform devastating attacks when their health is low, making 
                comebacks more possible than ever before. The "Krushing Blow" system also 
                adds an extra layer of strategy, allowing players to perform powerful 
                attacks when certain conditions are met.
                
                One of the most impressive things about Mortal Kombat 11 is its wealth of 
                content. The game features a full story mode, which picks up where the 
                previous game left off, as well as a range of single-player and multiplayer 
                modes. The game's online play is smooth and reliable, with a range of 
                options to customize matches to your liking.
                
                Overall, Mortal Kombat 11 is a must-play for fans of fighting games. The 
                game's stunning visuals, deep gameplay, and wealth of content make it one 
                of the best entries in the series to date.`}
                /> 

                <VideoGame
                title="Star Wars: The Force Unleached"
                content={`"Star Wars: The Force Unleashed" is an action-adventure video game 
                set in the Star Wars universe. The game follows the story of Starkiller, 
                a secret apprentice to Darth Vader, who is tasked with hunting down Jedi 
                survivors. The game's combat system allows players to use the Force to 
                manipulate their surroundings and perform powerful attacks.

                The graphics and sound design of the game are impressive, with detailed 
                environments and iconic Star Wars music. The story is engaging and fits well 
                within the Star Wars canon, offering a fresh perspective on the events 
                leading up to the original trilogy.
                
                Overall, "Star Wars: The Force Unleashed" is a fun and exciting game for 
                fans of the Star Wars franchise, offering a unique take on the classic story 
                of good versus evil in a galaxy far, far away.`}
                /> 

                <VideoGame
                title="Star Wars Jedi: Fallen Order"
                content={`"Star Wars Jedi: Fallen Order" is an action-adventure game developed 
                by Respawn Entertainment and published by Electronic Arts. Set after the 
                events of "Star Wars Episode III: Revenge of the Sith," the game follows the 
                journey of Cal Kestis, a young Padawan survivor of the Jedi Purge. Players 
                embark on a quest to restore Cal's connection to the Force and help him 
                complete his Jedi training while fighting against the Empire and its 
                Inquisitors.

                The game's story is well-written, with engaging characters and an intriguing 
                plot that captures the essence of the Star Wars universe. The game's visuals 
                are also impressive, with stunning environments and detailed character models. 
                The combat system is challenging and satisfying, with a focus on parrying and 
                dodging attacks, and a variety of Force powers to use against enemies.
                
                One of the game's strengths is its level design, which encourages exploration 
                and rewards players for revisiting areas with new abilities. However, the 
                game also has some minor flaws, such as repetitive enemies and some technical 
                glitches.
                
                Overall, "Star Wars Jedi: Fallen Order" is a great addition to the Star Wars 
                franchise, providing an excellent single-player experience with an engaging story, 
                challenging combat, and stunning visuals.`}
                />  
            </ol>
        </div>
    );
  };

export default VideoGames;