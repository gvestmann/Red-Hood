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
let storyFork = false;

//Listen for click on start page btn
start.addEventListener('click', e => {
    startContainer.classList.add('hidden');
    storyContainer.classList.remove('hidden');

    startStory(currentStory);
});

//Start story
function startStory(storyID) {
    let storyPortion = story.find(story => story.id === storyID);

    buildStory(storyPortion.storyText[0]);
    storyOngoing = true;
};

//Listen for keydown events if storyOngoing or StoryFork are true
document.addEventListener('keydown', e => {
    if (storyOngoing && e.code === 'Space') {
        storyIndex++;
        continueStory(currentStory, storyIndex);
    } else if (storyFork && e.code === 'ArrowLeft') {
        pickFork(1);
        storyFork = false;
    } else if (storyFork && e.code === 'ArrowRight') {
        pickFork(2);
        storyFork = false;
    }
});

//Function to continue story while there's still portions left, else check for end state and then build the story fork
function continueStory(storyID, i) {
    let storyPortion = story.find(story => story.id === storyID);
    let paragraph = storyContainer.querySelector('.paragraph');
    
    if (i < storyPortion.storyText.length) {
        paragraph.textContent = storyPortion.storyText[i];
    } else if (storyPortion.end) {
        paragraph.textContent = 'THE END';
    } else {
        buildFork(storyPortion.choice, storyPortion.optionA.text, storyPortion.optionB.text);
        storyOngoing = false;
        storyFork = true;
    }
}

//Function that changes the currentStory variable to the picked fork, and runs the startStory function again. Also resets the storyIndex variable to zero.
function pickFork(fork) {
    let storyPortion = story.find(story => story.id === currentStory);

    if (fork === 1) {
        console.log(`picked A/1/left which has id ${storyPortion.optionA.forkId}`);
        currentStory = storyPortion.optionA.forkId;
        storyIndex = 0;
        startStory(currentStory);
    } else if (fork === 2) {
        console.log(`picked B/2/right which has id ${storyPortion.optionB.forkId}`);
        currentStory = storyPortion.optionB.forkId;
        storyIndex = 0;
        startStory(currentStory);
    }
}

//Build the inner HTML for the story
function buildStory(text) {
    storyContainer.innerHTML = `<div class="storyline"><div class="paragraph">${text}</div></div>`;
}

//Build the inner HTML for the story fork
function buildFork(choice, a, b) {
    storyContainer.innerHTML = `<div class="storyfork"><p class="choice">${choice}</p><div class="options"><button><span class="optionA">${a}</span></button><button><span class="optionB">${b}</span></div></div>`;
}
 

