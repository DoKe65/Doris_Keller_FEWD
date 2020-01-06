// =============
// Intro
// =============

// adding a screen-type modal with html and css code
// Thanks for the inspiration to the awesome people from css-tricks.com: https://css-tricks.com/snippets/css/typewriter-effect/

const intro = document.createElement("div");
const introCode = document.createElement("pre");

const content = [
  `é!DOCTYPE htmlè <br>` ,
  `<br>éhtml lang="en"è <br>`,
  `<br>  éheadè <br>`,
  `<br>  émeta charset="UTF-8"è <br>`,
  `<br>  étitleèDoris Kelleré/titleè <br>`,
  `<br>  élink rel="stylesheet" href="css/styles.css"è <br>`,
  `<br>é/headè <br>`,
  `<br>   <br>`,
  `<br>ébodyè <br>`,
  `<br>  éheaderè <br>`,
  `<br>    ésection id="profile"è <br>`,
  `<br>      éimg src="img/dokel.jpg" alt="Photo of Doris Keller"è <br>`,
  `<br>      éaside class="description"è <br>`,
  `<br>        éh1 class="name"èDoris Kelleré/h1è <br>`,
  `<br>        éh2 class="role"èFrontend Web Developeré/h2è <br>`,
  `<br>      é/asideè <br>`,
  `<br>    é/sectionè <br>`,
  `<br>  é/headerè <br>`,
  `<br>é/bodyè <br>`,
  `<br>é/htmlè <br>`
];

let cancelled = false;

createModal(content);

function type () {
  for (let i = 0; i < content.length; i++) {
    let typewriter = document.getElementById('typewriter');
    typewriter = setupTypewriter(typewriter);
    typewriter.type();
  }
}

function createModal(content) {
  let escape = document.createElement("p");
  escape.innerHTML = "Click or hit éreturnè to skip intro";
  intro.setAttribute("id", "intro-modal");
  intro.style.display = "block";
  intro.appendChild(introCode);
  introCode.setAttribute("id", "typewriter");
  introCode.innerHTML = content;
  intro.appendChild(escape);
  document.body.appendChild(intro);
  type();
}

// remove modal
function removeModal(delay) {
  setTimeout( () => document.body.removeChild(intro), delay);
  window.scrollTo(0, 0);
}



// close the modal before code is written completely (skip)

intro.addEventListener("click", (e) => {
  if(e.target === intro) {
    cancelled = true;
    removeModal(0);
  }
});

document.addEventListener("keydown", (e) => {
  if (e.code === "Enter") {
    cancelled = true;
    if (document.getElementById("intro-modal")) {
      removeModal(0);
    }
  }
});

// Resource and credit: css-tricks.com Geoff Graham, https://css-tricks.com/snippets/css/typewriter-effect/


function setupTypewriter(t) {

  const HTML = introCode.innerHTML;
  introCode.innerHTML = "";

  let cursorPosition = 0,
    tag = "",
    writingTag = false,
    tagOpen = false,
    typeSpeed = 100,
    tempTypeSpeed = 0;

    const type = function() {

    if (writingTag === true) {
      tag += HTML[cursorPosition];
    }

    if (HTML[cursorPosition] === "<") {
      tempTypeSpeed = 0;
      if (tagOpen) {
          tagOpen = false;
          writingTag = true;
      } else {
          tag = "";
          tagOpen = true;
          writingTag = true;
          tag += HTML[cursorPosition];
      }
    }
    if (!writingTag && tagOpen) {
        tag.innerHTML += HTML[cursorPosition];
    }
    if (!writingTag && !tagOpen) {
      if (HTML[cursorPosition] === " ") {
          tempTypeSpeed = 0;
      }
      else {
          tempTypeSpeed = (Math.random() * typeSpeed) + 10;
      }
      introCode.innerHTML += HTML[cursorPosition];
    }
    if (writingTag === true && HTML[cursorPosition] === ">") {
      tempTypeSpeed = (Math.random() * typeSpeed) + 10;
      writingTag = false;
      if (tagOpen) {
        const newSpan = document.createElement("span");
        introCode.appendChild(newSpan);
        newSpan.innerHTML = tag;
        tag = newSpan.firstChild;
      }
    }

    cursorPosition += 1;
    if (cancelled) {
      return;
    } else if (cursorPosition < HTML.length -1) {
        setTimeout(type, tempTypeSpeed);
    } else if (cursorPosition === HTML.length -1) {
      intro.className = "hidden";
      removeModal(2500);
    }
  };

  return {
    type: type
  };
}
