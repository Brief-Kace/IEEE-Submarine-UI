

(function(){
var video = document.getElementById('video');
vendor Url = window.URL || window.webkitURL;

navigator.getMedia = navigator.getUserMedia ||
navigator.webKitGetUserMedia ||
navigator.mozGetUserMedia ||
navigator.msGetUserMedia;

//capture video
navigator.getMedia({
    video: true,
    audio: false},
   function(stream)
   {
         video.src = vendorUrl.createObjectURL(stream);
         video.play();
   },
   function(error){
      //an error occured
      //error.code
});
})();
