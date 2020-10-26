let story = [
    {
        id: 1,
        end: false,
        background: "img/scene122122.jpg",
        actorA: "img/the-huntsman.gif",
        actorB: "img/wolf.gif",
        storyText: [
            `Once upon a time, there was a little darling damsel, whom everybody loved that looked upon her, but her old granny loved her best of all. Once she made her a hood of red samite, and since she would wear nothing else on her head, people gave her the name of "Red Hood."`, `"God help you, Red Hood!" said he.`,
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
        background: "img/scene11.jpg",
        actorA: "img/the-huntsman.gif",
        actorB: "img/wolf-in-bed.gif",
        storyText: [
            `Red Hood ran scared from the wolf and hid behind a rock by the edge of the forest. The wolf wandered around for a long time, but soon vanished inbetween the trees.`, `As Red Hood came out from her hiding place, about to turn back home, three little pigs came walking by.`, `“Why do you hide, wee little human?” they asked.`, `“From the big, bad wolf,” she replied.`, `“Come with us, you’ll be safe,” they said, “we swear by the hairs on our chinny chin chins!”`,
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
        background: "img/scene12.jpg",
        actorA: "img/the-huntsman.gif",
        actorB: "img/wolf-in-bed.gif",
        storyText: [
            `"Whither so early, Red Hood?"`, `"To Granny. She must have a good meal for once, and strengthen herself therewith."`, `"Where does your Granny live, Red Hood?"`, `"A good quarter of an hour's walk further in the forest, under yon three large oaks," said Red Hood.`, `The Wolf thought within himself, "This nice young damsel is a rich morsel. She will taste better than the old woman; but you must trick her cleverly, that you may catch both."`, `For a time he went by Red Hood's side. Then said he, "Red Hood! Just look! There are such pretty flowers here! Why don't you look round at them all? If you bring with you a sweet smelling nosegay to granny, it will cheer her.”`, `“It is still so early, even if I go picking flowers, I shall come to her in plenty of time," and therewith she skipped into the forest.`, `The Wolf was pleased that his ploy worked and headed down the path to Granny’s house, when suddenly, a delightful smell of cookies flooded his nose.`,
        ],
        choice: "What does the Wolf do?",
        optionA: {
            text: "Follow the cookie smell", forkId: 121,
        },
        optionB: {
            text: "Go to Granny", forkId: 122,
        },
    },
]

// WRITE STORY TO THE HTML

const storylineContainer = document.querySelector('.storyline');
const storyforkContainer = document.querySelector('.storyfork');
const storybackgroundContainer = document.querySelector('.game__img');

function writeStory(storyID) {
    // Storyline containers
    const paragraph = storylineContainer.querySelector('.paragraph');
    const storyImageBG = storybackgroundContainer.querySelector('#storyBG');
    const storyImageActorA = storybackgroundContainer.querySelector('#actorA');
    const storyImageActorB = storybackgroundContainer.querySelector('#actorB');    
    
    // Storyfork containers
    const choice = storyforkContainer.querySelector('.choice');
    const optionA = document.getElementById('optionA');
    const optionB = document.getElementById('optionB');

    let storyPortion = story.find(story => story.id === storyID);
    let storyPortionText = storyPortion.storyText;

    console.log(storyPortionText);

    function initializePortion() {
        let i = 0;

        // Initialize story (push the first segment plus images)
        if (i === 0) {
        storyImageBG.src = storyPortion.background;
        storyImageActorA.src = storyPortion.actorA;
        storyImageActorB.src = storyPortion.actorB;
        paragraph.textContent = storyPortionText[i];
        };

        // Space bar to continue if there is more left of story section
        window.addEventListener('keydown', e => {
            if (e.code === 'Space' && i < storyPortionText.length-1) {
                i++;
                paragraph.textContent = storyPortionText[i];
            } else if (e.code === 'Space' && i === storyPortionText.length-1){
                console.log('Does this work?')
                endPortion();
            }
        });
    }

    function endPortion() {
        /*if (storyPortion.end) {
            console.log('Switch to end screen');
        } else {*/
            storylineContainer.classList.toggle('hidden');
            storyforkContainer.classList.toggle('hidden');

            choice.textContent = storyPortion.choice;
            optionA.textContent = storyPortion.optionA.text;
            optionB.textContent = storyPortion.optionB.text;

            window.addEventListener('keydown', e => {
                if (e.code === 'ArrowLeft') {
                    // storylineContainer.classList.toggle('hidden');
                    // storyforkContainer.classList.toggle('hidden');

                    writeStory(storyPortion.optionA.forkId);
                } else if (e.code === 'ArrowRight') {
                    writeStory(storyPortion.optionB.forkId);
                }
            });
        //}
    }

    initializePortion();

}

writeStory(1);



