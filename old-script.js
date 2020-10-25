let story = [
    {
      id: 1,
      child1: 2,
      child2: 3,
      end: false,
      background: "img/first-scene.png",
      story: ["Hello", "Hi!", "Last one",],
      optionQuestion: "What does Red Hood do?",
      optionA: "Run and hide",
      optionB: "Say hello to the wolf"
    },
    {
    id: 2,
    child1: 4,
    child2: 5,
    end: false,
    background: "img/first-scene.png",
    story: ["Second Child", "Hi!", "Last one",],
    optionQuestion: "What does Red Hood do?",
    optionA: "Run and hide",
    optionB: "Say hello to the wolf"
    },
    {
    id: 3,
    child1: 6,
    child2: 7,
    end: false,
    background: "img/first-scene.png",
    story: ["Third Child", "Hi!", "Last one",],
    optionQuestion: "What does Red Hood do?",
    optionA: "Run and hide",
    optionB: "Say hello to the wolf"
    },
];

function firstBuild() {
    for(let i = 0; i < story.length; i++) {
      if(story[i].id === 1) {
        setTimeout(function(){
        typeWrite(story[i].id, 0);
        }, delay);
      }
    }
  }

  function typeWrite(obj, num) {
    element = document.getElementById('element');
    element.innerHTML = '';
    for(let u = 0; u < story.length; u++) {
        if(story[u].id === obj) {
            var text = story[u].story[num]
            var i = 0;
            var lastNumber = num + 1
            var timer = setInterval(function() {
              if (i < story[u].story[num].length) {
                element = document.getElementById('element');
                element.append(text.charAt(i))
                i++;
              } else if(lastNumber === story[u].story.length) {
                console.log(story[u].story.length)
              clearInterval(timer);
              const main = document.getElementById('main');
              main.innerHTML = `<div class="option-wrapper">
              <button onclick="build(${story[u].child1})">${story[u].optionA}</button>
              <button onclick="build(${story[u].child2})">${story[u].optionB}</button>
              </div>`
              }
                else {
                clearInterval(timer);
                var nextNumber = num + 1
                var button = document.createElement('button')
                var continueWrapper = document.createElement('div')
                continueWrapper.setAttribute('class', 'continue')
                button.innerHTML = "Continue >>"
                button.setAttribute('onclick', `typeWrite(${obj}, ${nextNumber})`)
                element.appendChild(continueWrapper);
                continueWrapper.appendChild(button)
              }
              next();
              function next() {
                console.log(story[u].story[0])
              }
            }, speed);
        }
    }
  }

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
  
  firstBuild();
  
  var speed = 75;
  var delay = 15 * speed + speed;
  
  /*setTimeout(function(){
  typeWrite(1, 0);
  }, delay);*/