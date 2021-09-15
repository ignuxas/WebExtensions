// By: Ignas Mikolaitis
// Website: ignuxas.com
 
(function() {
    'use strict';
 
    if (document.getElementById("polymer-app") || document.getElementById("masthead") || window.Polymer) {
    setInterval(function() {
        if (window.location.href.indexOf("watch?v=") < 0) {
            return false;
        }
        if (document.getElementById("count") && document.getElementById("distillvideo") === null) {
            yetete();
            Addytpolymer();
            yeett();
        }
    }, 100);
} else {
    setInterval(function() {
        if (window.location.href.indexOf("watch?v=") < 0) {
            return false;
       }
    }, 100);
}
 
 
function Addytpolymer() {
 
    var y1 = window.location.href[32];
    var y2 = window.location.href[33];
    var y3 = window.location.href[34];
    var y4 = window.location.href[35];
    var y5 = window.location.href[36];
    var y6 = window.location.href[37];
    var y7 = window.location.href[38];
    var y8 = window.location.href[39];
    var y9 = window.location.href[40];
    var y10 = window.location.href[41];
    var y11 = window.location.href[42];
 
    var buttonDiv = document.createElement("span");
    buttonDiv.style.width = "100%";
    buttonDiv.id = "distillvideo";
    var addButton = document.createElement("a");
    addButton.appendChild(document.createTextNode("MP4"));
    addButton.style.width = "100%";
    addButton.style.backgroundColor = "#424242";
    addButton.style.color = "white";
    addButton.style.textAlign = "center";
    addButton.style.padding = "2px 10px";
    addButton.style.margin = "0px 10px";
    addButton.style.fontSize = "13px";
    addButton.style.border = "0";
    addButton.style.cursor = "pointer";
    addButton.style.borderRadius = "2px";
    addButton.style.fontFamily = "Roboto, Arial, sans-serif";
    addButton.style.textDecoration = "none";
    addButton.href = "https://www.y2mate.com/youtube/"+y1+y2+y3+y4+y5+y6+y7+y8+y9+y10+y11;
    addButton.target = "_blank";
    buttonDiv.appendChild(addButton);
    var targetElement = document.querySelectorAll("[id='count']");
    for (var i = 0; i < targetElement.length; i++) {
        if (targetElement[i].className.indexOf("ytd-video-primary-info-renderer") > -1) {
            targetElement[i].appendChild(buttonDiv);
        }
    }
}
function yeett () {
    var y1 = window.location.href[32];
    var y2 = window.location.href[33];
    var y3 = window.location.href[34];
    var y4 = window.location.href[35];
    var y5 = window.location.href[36];
    var y6 = window.location.href[37];
    var y7 = window.location.href[38];
    var y8 = window.location.href[39];
    var y9 = window.location.href[40];
    var y10 = window.location.href[41];
    var y11 = window.location.href[42];
 
    var buttonDiv = document.createElement("span");
    buttonDiv.style.width = "100%";
    buttonDiv.id = "distillvideo";
    var addButton = document.createElement("a");
    addButton.appendChild(document.createTextNode("MP3"));
    addButton.style.width = "100%";
    addButton.style.backgroundColor = "#424242";
    addButton.style.color = "white";
    addButton.style.textAlign = "center";
    addButton.style.padding = "2px 10px";
    addButton.style.margin = "0px 0px";
    addButton.style.fontSize = "13px";
    addButton.style.border = "0";
    addButton.style.cursor = "pointer";
    addButton.style.borderRadius = "2px";
    addButton.style.fontFamily = "Roboto, Arial, sans-serif";
    addButton.style.textDecoration = "none";
    addButton.href = "https://www.y2mate.com/youtube-mp3/"+y1+y2+y3+y4+y5+y6+y7+y8+y9+y10+y11;
    addButton.target = "_blank";
    buttonDiv.appendChild(addButton);
    var targetElement = document.querySelectorAll("[id='count']");
    for (var i = 0; i < targetElement.length; i++) {
        if (targetElement[i].className.indexOf("ytd-video-primary-info-renderer") > -1) {
            targetElement[i].appendChild(buttonDiv);
        }
    }
}
})();
function yetete() {
    if (document.getElementById('thepipbutton')) {
    }
    else{
        var skrrr = document.getElementsByClassName("ytp-left-controls")[0];
        var vidd = document.getElementsByTagName('video')[0];
        var batonas = document.createElement('Button');
        function yeet (){
            vidd.requestPictureInPicture();
        }
        batonas.style.padding = "2px 10px";
        batonas.style.margin = "0px 0px";
        batonas.textContent = "PiP";
        batonas.style.background = "none";
        batonas.style.border = "none";
        batonas.onclick = yeet;
        batonas.style.color = "#ffffff";
        batonas.id = ("thepipbutton");
 
        skrrr.append(batonas)
    }
}
 
function skrr(){
 
var searchfor = document.getElementById("ignuxastag");
 
if(searchfor){
    return 0
}
else{
    var nig = document.getElementById("start");
    var textt = document.createElement("p");
    var text1 = document.createTextNode("Modded By Ignuxas");
    textt.appendChild(text1);
    textt.style.color=("#424242");
    textt.id=("ignuxastag");
 
    nig.append(textt);
 
    console.log(nig);
    }
}
skrr()
