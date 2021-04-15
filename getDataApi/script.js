var SpeechRecognition = SpeechRecognition || webkitSpeechRecognition
var SpeechGrammarList = SpeechGrammarList || webkitSpeechGrammarList
var SpeechRecognitionEvent = SpeechRecognitionEvent || webkitSpeechRecognitionEvent

var words = [ 'back', 'next', 'hello']; 
var grammar = '#JSGF V1.0; grammar words; public <word> = ' + words.join(' | ') + ' ;'

var recognition = new SpeechRecognition();
var speechRecognitionList = new SpeechGrammarList();
var i = 0
speechRecognitionList.addFromString(grammar, 1);
recognition.grammars = speechRecognitionList;
recognition.continuous = true;
recognition.lang = 'en-US';
recognition.interimResults = false;
recognition.maxAlternatives = 1;



recognition.onresult = function(event) {
  // The SpeechRecognitionEvent results property returns a SpeechRecognitionResultList object
  // The SpeechRecognitionResultList object contains SpeechRecognitionResult objects.
  // It has a getter so it can be accessed like an array
  // The first [0] returns the SpeechRecognitionResult at the last position.
  // Each SpeechRecognitionResult object contains SpeechRecognitionAlternative objects that contain individual results.
  // These also have getters so they can be accessed like arrays.
  // The second [0] returns the SpeechRecognitionAlternative at position 0.
  // We then return the transcript property of the SpeechRecognitionAlternative object
  //var color = event.results[i][0].transcript;
  //diagnostic.textContent = 'Result received: ' + color + '.';
  //bg.style.backgroundColor = color;
  //console.log('Result: ' + event.results[i][0].transcript);
  let str = event.results[i][0].transcript
  switch(str.toLowerCase().trim())
  {
    case "hello":
      getData(API,home)
      break
    case "next":
      getData(next)
      break
    case "back":
      getData(preview)
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

recognition.start();

