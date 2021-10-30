var Spechrecognition = window.webkitSpeechRecognition;
var recognition = new Spechrecognition();

function start()
    {
        document.getElementById("textbox").innerHTML = "";
        recognition.start();
    }
    recognition.onresult = function (event){
        console.log(event);
        var content = event.results[0][0].transcript;
        document.getElementById("textbox").innerHTML = content;
        console.log(content);
        speak();
    }
function speak()
{
    synth = window.speechSynthesis;
    speake_data = document.getElementById("textbox").value;
    utter = new SpeechSynthesisUtterance(speake_data);
    console.log(utter);
    synth.speak(utter);
    Webcam.attach(camera);
}
camera = document.getElementById("camera");
Webcam.set({
width : 360,
height : 260,
image_formate : 'jpeg',
jpeg_quality : 90
});