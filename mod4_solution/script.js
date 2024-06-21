
var helloSpeaker = (function() {
  var speakWord = "Hello";
  return {
      speak: function(name) {
          console.log(speakWord + " " + name);
      }
  };
})();


var byeSpeaker = (function() {
  var speakWord = "Good Bye";
  return {
      speak: function(name) {
          console.log(speakWord + " " + name);
      }
  };
})();


(function iife1() {
  var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
  
  for (var i = 0; i < names.length; i++) {
      var firstLetter = names[i].charAt(0).toLowerCase();
      if (firstLetter === 'j') {
          byeSpeaker.speak(names[i]);
      } else {
          helloSpeaker.speak(names[i]);
      }
  }
})();