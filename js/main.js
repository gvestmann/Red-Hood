let story = [
    {
        id: 1,
        end: false,
        background: "/img/first-scene.png",
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
        background: "/img/first-scene.png",
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
        background: "/img/first-scene.png",
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
    // {
    //     id: ,
    //     end: ,
    //     background: ,
    //     story: [

    //     ],
    //     choice: ,
    //     optionA: {
    //         text: , forkId: ,
    //     },
    //     optionB: {
    //         text: , forkId: ,
    //     },
    // },
]

// WRITE THE STORY TO THE HTML
const storylineContainer = document.querySelector(".storyline");
const storyforkContainer = document.querySelector(".storyfork");

function writeStory() {
    let i = 0;
    const paragraph = storylineContainer.querySelector(".paragraph");
    const choice = storyforkContainer.querySelector(".choice");
    const optionA = document.getElementById("optionA");
    const optionB = document.getElementById("optionB");

    // Grab the correct ID from the Object
    let currentStory= story.find(story => story.id === 1);
    let currentStoryText = currentStory.storyText;
    //let currentStoryEnd = currentStory.end;


    // Push the first portion of the story
    if (i === 0) {
        paragraph.textContent = currentStoryText[i];
    }

    // Push new portion when Space is pressed
    window.addEventListener('keydown', e  => {
        if (e.code === 'Space') {
            i++;

            if (i < currentStoryText.length) {
                paragraph.textContent = currentStoryText[i];
            } else if (currentStory.end) {
                // If the story is an ending, switch to the THE END screen
                console.log('Switch to end screen');
            } else {
                // If the story continue, show storyfork choices
                storylineContainer.classList.toggle('hidden');
                storyforkContainer.classList.toggle('hidden');

                choice.textContent = currentStory.choice;
                optionA.textContent = currentStory.optionA.text;
                optionB.textContent = currentStory.optionB.text;
            }
        }
    });
}

writeStory();





