let story = [
    {
        id: 1,
        end: false,
        background: "/img/first-scene.png",
        actorA: "/img/red-hood.gif",
        actorB: "/img/wolf.gif",
        storyText: [
            `Once upon a time, there was a little darling damsel, whom everybody loved that looked upon her, but her old granny loved her best of all. Once she made her a hood of red samite, and since she would wear nothing else on her head, people gave her the name of "Red Hood."`, `Once her mother said to Red Hood, "Go; here is a slice of cake and a bottle of wine; carry them to old Granny. She is ill and weak, and they will refresh her. Walk prettily and don't go out of the road, otherwise you will fall and break the bottle, and then poor granny will have nothing."`, `But granny lived out in a forest, half an hour's walk from the village. When Red Hood went into the forest, she met a wolf. But she did not know what a wicked beast he was, and was not afraid of him.`, `"God help you, Red Hood!" said he.`
        ],
        choice: "What does Red Hood do?",
        optionA: {
            text: 'Run and hide', forkId: 11,
        },
        optionB: {
            text: 'Say hello to the Wolf', forkId: 12,
        },
    },
    {
        id: 11,
        end: false,
        background: "/img/scene11.jpg",
        actorA: "/img/three-pigs.gif",
        actorB: "/img/red-hood.gif",
        storyText: [
            `Red Hood ran scared from the wolf and hid behind a rock by the edge of the forest. The wolf wandered around for a long time, but soon vanished inbetween the trees.`, `As Red Hood came out from her hiding place, about to turn back home, three little pigs came walking by.`, `“Why do you hide, wee little human?” they asked. “From the big, bad wolf,” she replied.`, `“Come with us, you’ll be safe,” they said, “we swear by the hairs on our chinny chin chins!”`
        ],
        choice: "What does Red Hood do?",
        optionA: {
            text: 'Go with the pigs', forkId: 111,
        },
        optionB: {
            text: 'Go back home', forkId: 112,
        },
    },
    {
        id: 12,
        end: false,
        background: "/img/scene12.jpg",
        actorA: "/img/red-hood.gif",
        actorB: "/img/wolf.gif",
        storyText: [
            `"Whither so early, Red Hood?"

            "To Granny. She must have a good meal for once, and strengthen herself therewith."`,
            `"Where does your Granny live, Red Hood?"

            "A good quarter of an hour's walk further in the forest, under yon three large oaks," said Red Hood.`,
            `The Wolf thought within himself, "This nice young damsel is a rich morsel. She will taste better than the old woman; but you must trick her cleverly, that you may catch both."`,
            `For a time he went by Red Hood's side. Then said he, "Red Hood! Just look! There are such pretty flowers here! Why don't you look round at them all? If you bring with you a sweet smelling nosegay to granny, it will cheer her.”`,
            `“It is still so early, even if I go picking flowers, I shall come to her in plenty of time," and therewith she skipped into the forest.`,
            `The Wolf was pleased that his ploy worked and headed down the path to Granny’s house, when suddenly, a delightful smell of cookies flooded his nose.`,
        ],
        choice: "What does The Wolf do?",
        optionA: {
            text: 'Follow the cookie smell', forkId: 121,
        },
        optionB: {
            text: 'Go to granny', forkId: 122,
        },
    },
    {
        id: 111,
        end: false,
        background: "/img/scene111.jpg",
        actorA: "/img/red-hood.gif",
        actorB: "/img/three-pigs.gif",
        storyText: [
            `"Red Hood thanks the three little pigs for offering to help her and the four of them head off into the woods together. Red Hood tells the pigs all about how she’s supposed to go visit her ill Granny to bring her cake and wine.`,
            `The three little pigs are familiar with Granny’s house and know of a shortcut to get there. They lead Red Hood through a narrow path in the woods and eventually come out in the garden behind the little house. That’s when they spot the Wolf waiting in the bushes by the front of the house.`,
            `“Not to worry,” says the eldest pig. “Granny’s house is made of premium stone material and there’s no way the Big Bad Wolf will be able to blow it down. We’ll be safe in there.”`,
            `So Red Hood and the pigs knock on Granny’s back door and the little old woman comes to let them in.`,
            `Granny is very happy to see that Red Hood has arrived safely. And that she’s brought company... or is it dinner maybe? At any rate, it’s time to whip up a feast!`,
        ],
        choice: "What does Granny want to do?",
        optionA: {
            text: 'Eat the pigs', forkId: 1211,
        },
        optionB: {
            text: 'Feed the pigs', forkId: 1212,
        },
    },
    {
        id: 112,
        end: true,
        background: "/img/scene112.jpg",
        actorA: "/img/red-hood.gif",
        actorB: "/img/three-pigs.gif",
        storyText: [ `Red Hood backed away slowly. She was not about to trust three talking pigs and after all, just last year a neighboring boy had been brutally killed in a vicious pig attack, so it was best not to take any chances.`, `When she felt she was a safe distance away from the pigs, Red Hood turned around and ran all the way back home. She was likely scolded by her mother for not visiting her ailing granny, but better grounded than dead they say.`, `Fortunately for the pigs, in her hurry to get away, Red Hood forgot her basket. So the three little pigs pigged out on the cake and drank all the wine and then passed out there by the rock that Red Hood had hidden behind.`, `While they were fast asleep in their drunken stupor, a shadow of a Wolf crept over them...`, 
        ],
        choice: "",
        optionA: {
            text: '', forkId: 0,
        },
        optionB: {
            text: '', forkId: 0,
        },
    },
    {
        id: 1111,
        end: true,
        background: "/img/scene1111.jpg",
        actorA: "/img/red-hood-and-granny.gif",
        actorB: "/img/huntsman.gif",
        storyText: [`As there is no grocery store within walking distance from Granny’s little house in the woods, she’s been eating nothing but canned tuna and asparagus for a while. She’s very pleased that her darling granddaughter has brought cake, wine and dinner on this visit.`, `Granny fetches her sleeping pills from the bathroom cabinet and mixes it into three cups of tea to offer to the pigs. Once the pigs are passed out, Granny tells Red Hood to kill them while she prepares the fire.`, `While Granny and Red Hood are spit roasting the three little pigs, there is a knock on the door. Red Hood answers. It’s the Huntsman.`, `“I was just out in the woods, hunting,” he says, “when the smell of a feast cooking crept into my nostrils. And I was just wondering whether you had enough food for one more mouth?”`, `“Of course!” said Red Hood and let him in, “You’re more than welcome to join us Huntsman.”`, `Granny, Red Hood and the Huntsman enjoyed their feast and drank the wine that Red Hood’s mother had sent. As a parting gift, the Huntsman gave Red Hood a new cloak of Wolf skin, as he had finally caught his foe just before he came knocking on Granny’s door.`,
        ],
        choice: "",
        optionA: {
            text: '', forkId: 0,
        },
        optionB: {
            text: '', forkId: 0,
        },
    },
    {
        id: 1112,
        end: true,
        background: "/img/scene1112.jpg",
        actorA: "/img/red-hood-and-granny.gif",
        actorB: "/img/three-pigs.gif",
        storyText: [`Granny was delighted to have all this company, for she was often alone for long stretches of time out there in the woods by herself.

        Red Hood handed over mother’s basket and Granny told her to go in the kitchen and get some plates for their company.`, `“There’s also some apples and a bit of cheese in the pantry dear!” she called out after Red Hood.`, `So Granny, Red Hood and the Three Little Pigs ate, drank and were merry until the wee hours of the night.`,
        ],
        choice: "",
        optionA: {
            text: '', forkId: 0,
        },
        optionB: {
            text: '', forkId: 0,
        },
    },
    {
        id: 121,
        end: false,
        background: "/img/scene121.jpg",
        actorA: "/img/wolf.gif",
        actorB: "/img/hans-and-greta.gif",
        storyText: [`The Wolf went through the narrow forrest and followed the smell of gingerbread cookies. “This smell is mesmerizing” the Wolf thought to himself.  He continued running, sniffing at the air, until he came to a house made of gingerbread cookies. `, `But, he heard agonizing screams coming from the house. He snuck around and looked in through the window of the house where he saw a girl pushing a witch into an oven. In the corner of the house was a caged boy who was fat and plump.`, `"To hell with Red Hood, this guy is stuffed like a Thanksgiving turkey," thought the wolf, salivating. “And the girl will make a nice dessert” he thought to himself.`,
        ],
        choice: "What does the wolf do?",
        optionA: {
            text: 'Burst through the door', forkId: 1211,
        },
        optionB: {
            text: 'Sneak through the window', forkId: 1212,
        },
    },
    {
        id: 1211,
        end: true,
        background: "/img/scene1211.jpg",
        actorA: "/img/wolf.gif",
        actorB: "/img/hans-and-greta.gif",
        storyText: [`The Wolf burst through the front door. “Greta, look out” screamed Hans with a terrifying quiver in his voice. The Wolf jumped forward to grab Greta but she was to fast for him. She slid through his legs and ran out of the house leaving Hans alone with the Wolf.`, `Greta ran and ran crying as she realised that there was nothing she could do to save Hans. In the house the Wolf looked at Hans and said with a growly, raspy voice “You will have to do boy”.`, `Hans screamed “What are you gonna do with me?!” The Wolf turned to the oven and removed the charred remains of the dead Witch. He lowered the temperature on the oven and mumbled to himself “120 degrees should do the trick, low and slow and baste him with butter”.`, `A few hours later, the Wolf polished off the last of Hans, sucking the bone marrow out of his femur. Now it was he that was stuffed like a thanksgiving turkey, for the Wolf had never eaten so well in his lifetime. He dozed off to sleep and dreamed of catching sheep in a field of flowers.`,
        ],
        choice: "",
        optionA: {
            text: '', forkId: 0,
        },
        optionB: {
            text: '', forkId: 0,
        },
    },
    {
        id: 1212,
        end: true,
        background: "/img/scene1212.jpg",
        actorA: "/img/wolf.gif",
        actorB: "/img/hans-and-greta.gif",
        storyText: [`The Wolf tried to open the window as slowly and quietly as he could, but the sugardrop hinges creaked ever so slightly. Hans looked at the window and saw the Wolf outside. “Greta, there is a Wolf out there” he whispered to her so low that the Wolf couldn’t hear him. `, `Greta looked around for something see could use as a weapon and saw a cast iron skillet on the table. The Wolf had opened the window and stuck his head in. Greta ran to grab the skillet, turned towards the Wolf and hit him square on the head. He was knocked out cold. Greta released Hans from his cage and they ran as far away as they could get from the horrors of the Gingerbreadhouse and the Wolf.`, `The Wolf only regained conciousness when the rumbles from his empty belly had gotten extremely loud. Dazed and hungry, he climbed into the gingerbread house and found the burnt carcass of the witch in the oven.`, `Alone, sad and defeated, the Wolf sat on the floor of the Gingerbread house and mulched on her charred bones.`, 
        ],
        choice: "",
        optionA: {
            text: '', forkId: 0,
        },
        optionB: {
            text: '', forkId: 0,
        },
    },
    {
        id: 122,
        end: false,
        background: "/img/scene122.jpg",
        actorA: "/img/red-hood.gif",
        actorB: "/img/wolf.gif",
        storyText: [`The Wolf ignored the wafting smell of cookies and continued on his way to Granny’s house. The Wolf walked in and went without saying a word straight to Granny's bed and ate her up. Then he took her clothes, dressed himself in them, and lay down in her bed.`, `Meanwhile in the forest, Red Hood had picked so many flowers that she could not carry any more so she headed towards Granny’s house. It seemed strange to her that the door was wide open, and when she entered the room everything seemed to her so peculiar.`, `She said, "Good-day!" but received no answer.

        She went into Granny’s bedroom thereupon the bed lay Granny, with her cap drawn down to her eyes, and looking so queer!`,
        ],
        choice: "What does Red Hood do?",
        optionA: {
            text: 'Inquire about granny’s health', forkId: 1221,
        },
        optionB: {
            text: 'Grab her Colt .45', forkId: 1222,
        },
    },
    {
        id: 1221,
        end: false,
        background: "/img/scene1221.jpg",
        actorA: "/img/red-hood.gif",
        actorB: "/img/wolf.gif",
        storyText: [`Ah, Granny! Why have you such long ears?"
        "The better to hear you with."
        "Ah, Granny! Why have you such large eyes?"`, `"The better to see you with."
        "But, Granny! Why have you such a terribly large mouth?"
        "The better to eat you up!"`, `And therewith the Wolf sprang out of bed at once on poor little Red Hood, and ate her up in one bite. When the Wolf had satisfied his appetite, he lay down again in the bed, and began to snore tremendously.`, `But soon a Huntsman came past, and bethought himself, "How can an old woman snore like that? I should maybe have a look to see what it is, but the daylight would get away from me if I do. What to do, what to do..." `,
        ],
        choice: "What does The Huntsman do?",
        optionA: {
            text: 'Go check on Granny', forkId: 12211,
        },
        optionB: {
            text: 'Go hunting', forkId: 12212,
        },
    },
]