let story = [
    {
      id: 1,
      child1: 21,
      child2: 22,
      end: false,
      background: "img/first-scene.png",
      story: ["Hello", "Once upon a time, there was a little darling damsel, whom everybody loved that looked upon her, but her old granny loved her best of all. Once she made her a hood of red samite, and since she would wear nothing else on her head, people gave her the name of Red Hood.", "Once her mother said to Red Hood, Go; here is a slice of cake and a bottle of wine; carry them to old granny. She is ill and weak, and they will refresh her. Walk prettily and don't go out of the road, otherwise you will fall and break the bottle, and then poor granny will have nothing.", "But granny lived out in a forest, half an hour's walk from the village. When Red Hood went into the forest, she met a wolf. But she did not know what a wicked beast he was, and was not afraid of him.", "God help you, Red Hood! said he."],
      optionQuestion: "What does Red Hood do?",
      optionA: "Run and hide",
      optionB: "Say hello to the wolf"
    },
    {
      id: 21,
      child1: 3211,
      child2: 3212,
      end: false,
      background: "img/first-scene.png",
      story: ["This is pure magic. Gummi is a genius.", "Look at Gummi go! Holy moly ..."],
      optionQuestion: "What does Red Hood do?",
      optionA: "Get drunk",
      optionB: "Visit grandma",
    }
];

function build(obj) {
    const main = document.getElementById('main');
    var obj = obj
    for(let i = 0; i < story.length; i++) {
      if(story[i].id == obj && story[i].end === false) {
        main.innerHTML = `<h2>${story[i].text}</h2>`
        typeWrite(story[i].id, 0);
      } else if(story[i].id == obj && story[i].end === true) {
      main.innerHTML = `<h2>${story[i].text}</h2>` 
      }
  
    }
  }
  
  
  function firstBuild() {
    const storyText = document.getElementById('story-wrapper');
    for(let i = 0; i < story.length; i++) {
      if(story[i].id === 1) {
        storyText.innerHTML = `<h2>${story[i].text}</h2>`
        setTimeout(function(){
        typeWrite(story[i].id, 0);
        }, delay);
      }
    }
  }
  
  
  
  firstBuild();
  
  function typeWrite(obj, num) {
    storyWrapper = document.getElementById('story-wrapper');
    storyWrapper.innerHTML = '';
    for(let u = 0; u < story.length; u++) {
        if(story[u].id === obj) {
            var text = story[u].story[num]
            var i = 0;
            var lastNumber = num + 1
            var lastNumberOffset = story[u].story.length - 1
            var timer = setInterval(function() {
              if (i < story[u].story[num].length) {
                storyWrapper = document.getElementById('story-wrapper');
                storyWrapper.append(text.charAt(i))
                i++;
              } else if(lastNumber === lastNumberOffset) {
              clearInterval(timer);
              storyWrapper = document.getElementById('story-wrapper');
              storyWrapper.innerHTML = `<p class="continue-question">${story[u].optionQuestion}</p>
              <div class="option-wrapper">
              <button onclick="build(${story[u].child1})">${story[u].optionA}</button>
              <button onclick="build(${story[u].child2})">${story[u].optionB}</button>
              </div>`
              } else {
                clearInterval(timer);
                buttonWrapper = document.createElement('div');
                buttonWrapper.setAttribute('class', "continue")
                var nextNumber = num + 1;
                var button = document.createElement('button')
                button.innerHTML = "Continue >>";
                button.setAttribute('onclick', `typeWrite(${obj}, ${nextNumber})`)
                storyWrapper.appendChild(buttonWrapper)
                buttonWrapper.appendChild(button)
              }
              next();
              function next() {
                console.log(story[u].story[0])
              }
            }, speed);
        }
    }
  }
  
  var speed = 75;
  var delay = 15 * speed + speed;
  
  /*setTimeout(function(){
  typeWrite(1, 0);
  }, delay);*/