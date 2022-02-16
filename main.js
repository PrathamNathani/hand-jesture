Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});
var camera=document.getElementById("camera");
Webcam.attach("#camera");

function take_snapshot() {
    Webcam.snap(function(data_uri)  {
       document.getElementById("result").innerHTML="<img id='capture_image' src='"+  data_uri+"'>";
    });
 }

    var classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/nBB6BOK-L/model.json",modelLoaded);
function modelLoaded(){
    console.log("model loaded");
 }

    function check(){
        var img=document.getElementById("capture_image");
        classifier.classify(img,gotResult);
    }
    function gotResult(error,results){
        if(error){
            console.error(error);
    
        }
        else{
            console.log(results);
            document.getElementById("resultssss").innerHTML=results[0].label;
        }
    }