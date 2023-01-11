Webcam.set({
    width:300,
    height:300,
    image_format:"png",
    png_quality:90
})
function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    })
}
classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models',modelLoaded)
function modelLoaded(){
    console.log("model loaded")
}
modelLoaded.json
function check(){
    img=document.getElementById("captured_image")
    classifier.classify(img,gotResult)
  }
  function gotResult(error,results){
    if(error){
      console.error(error);
    }
    else{
      document.getElementById("result_emotion_name").innerHTML=results[0].label;
      document.getElementById("result_emotion_name2").innerHTML=results[1].label;
      prediction_1=results[0].label;
      prediction_2=results[1].label;
      speak()
      if (results[0].label=="thumbs_up"){
        document.getElementById("update_emoji").innerHTML="&#128077;"
      }
      if (results[0].label=="two_fingers"){
        document.getElementById("update_emoji").innerHTML="&#9996;"
      }
      if (results[0].label=="three_fingers"){
        document.getElementById("update_emoji").innerHTML="&#128076;"
      }
    }
  }