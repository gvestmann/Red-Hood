let story = [
    {
        id: 1,
        end: false,
        storyText: [
            `This is text one`, `This is text two`,
        ],
        choice: "Left or right?",
        optionA: {
            text: 'Left', forkId: 11,
        },
        optionB: {
            text: 'Right', forkId: 12,
        },
    },
    {
        id: 11,
        end: false,
        storyText: [
            `You chose left`, `“Left left`, `Three lefts...`, `And a fourth, back where you started`,
        ],
        choice: "Up or down",
        optionA: {
            text: 'Up', forkId: 111,
        },
        optionB: {
            text: 'Down', forkId: 112,
        },
    },
    {
        id: 12,
        end: true,
        storyText: [
            `Right... that's the end of that.`,
        ],
    },
]

const start = document.querySelector('#startBtn');

const startContainer = document.querySelector('.start');
const storyContainer = document.querySelector('.story');

let currentStory = 1;
let storyIndex = 0;
let storyOngoing = false;


start.addEventListener('click', e => {
    startContainer.classList.add('hidden');
    storyContainer.classList.remove('hidden');

    startStory(currentStory);
});

function startStory(storyID) {
    let storyPortion = story.find(story => story.id === storyID);

    buildStory(storyPortion.storyText[0]);
    storyOngoing = true;
};

document.addEventListener('keydown', e => {
    if (storyOngoing && e.code === 'Space') {
        storyIndex++;
        continueStory(currentStory, storyIndex);
    }
});

function continueStory(storyID, i) {
    let storyPortion = story.find(story => story.id === storyID);
    let paragraph = storyContainer.querySelector('.paragraph');
    
    if (i < storyPortion.storyText.length) {
        paragraph.textContent = storyPortion.storyText[i];
    } else {
        buildFork(storyPortion.choice, storyPortion.optionA.text, storyPortion.optionB.text);
        storyOngoing = false;
    }
}

function buildStory(text) {
    storyContainer.innerHTML = `<div class="storyline"><div class="paragraph">${text}</div></div>`;
}

function buildFork(choice, a, b) {
    storyContainer.innerHTML = `<div class="storyfork"><p class="choice">${choice}</p><div class="options"><button><span class="optionA">${a}</span></button><button><span class="optionB">${b}</span></div></div>`;
}
 

