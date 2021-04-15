var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var words = [ 'back', 'next', 'hello', 'git', 'github', 'previous', 'go back', 'following', 'home']; 
var grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
var i = 0
var hello = true
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;



recognition.onresult = function(event) {

  let str = event.results[i][0].transcript
  console.log(str)
  switch(str.toLowerCase().trim())
  {
    case "hello":
      getData(API,home)
      if(hello)
      {
        miAudio.play()
        hello = false
      }
      break
    case "next":
      getData(next)
      break
    case "following":
      getData(next)
      break
    case "back":
      getData(preview)
      break
    case "go back":
      getData(preview)
      break
    case "previous":
      getData(preview)
      break
    case "show github":
      redirGit()
      break
    case "github":
      redirGit()
      break
    case "open project":
      redirGit()
      break
    case "go to project":
      redirGit()
      break
    case "":
      break
    case "":
      break
    case "":
      break
    case "":
      break
    case "":
      break
    

  }
  
  i++
}

recognition.onsoundend = function() {
  console.log("Termino el sonido")
}

recognition.onsoundstart = function() {
  console.log("Inicio el sonido")
}
recognition.onspeechend = function() {
  recognition.stop();
}

document.body.onclick = function() {
  recognition.start();
}

const redirGit = () =>
{
  window.open('https://github.com/luciagiglio/RickAndMorty', '_blank');
}
