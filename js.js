
// our speech is a speech synthesis utterance function
let speech = new SpeechSynthesisUtterance();

// voices are stored in a blank array used to populate our select element
let voices = [];

// voice select is a querySelector of our select elements items
let voiceSelect = document.querySelector("select");

// web api to control speech functionality

// set up an event listener
// triggers voiceschanged event
// when voices are added or removed
// event is fired
window.speechSynthesis.onvoiceschanged = () => {
    // input speech voices
    // process voices, store them in voices container
    voices = window.speechSynthesis.getVoices();
    // default speak in first voice
    // chooses default voice
    speech.voice = voices[0];

    // iterates through voices
    // creates an option element for each voice 
    // within a select element 
    // with id "voiceSelect"
    
    // voices.forEach "voice" with index i
    // options[i] provides array like property
    // 

    voices.forEach((voice, i) => (voiceSelect.options[i] = new Option(voice.name, i)))
};

// change event on dropdown

// voice select is all our query selector
// input all select elements
// process each with a change event for changing selected voice
// output new voice selection
voiceSelect.addEventListener("change", () => {
    speech.voice = voices[voiceSelect.value];
})

// select button element
// add an "click" event listener
// 
document.querySelector("button").addEventListener("click", ()=> {
    // need value in text area
    // speech.text = querySelector our text areas value
    speech.text = document.querySelector("textarea").value;
    // speech will access text property value and speak aloud
    window.speechSynthesis.speak(speech);

});

