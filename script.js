
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('serviceworker.js')
    .then(function() {
      console.log('SW registered');
    });
}


(function() {
  function loadJSON(file, callback) {
    var rawFile = new XMLHttpRequest();
    rawFile.overrideMimeType("application/json");
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
        callback(rawFile.responseText);
      }
    }
    rawFile.send(null);
  }
  //usage:
  loadJSON("data.json", function(text){
    let card = JSON.parse(text);
    console.log(card);
    raja(card.profile);
  });
var flex = document.getElementById("flex");
flex.classList.add("flex");

 function raja(profile) {

for (i in profile) {
 var flex1 = document.createElement("div");
 flex1.classList.add("cardview");
 var img = document.createElement("img");
 img.classList.add("image");
 img.src=profile[i].image;
 var container = document.createElement("div");
 container.classList.add("container");
 var h3 = document.createElement("h3");
 h3.classList.add("Name");
 h3.textContent=profile[i].name;
 container.appendChild(h3);
 for (j in profile[i].number) {
   var p= document.createElement("p");
var li = document.createElement("li");
li.textContent=profile[i].number[j];
p.appendChild(li);
container.appendChild(p);
 }
var p = document.createElement("p");
 var button = document.createElement("button");
 button.textContent=profile[i].picture;
p.appendChild(button);
 container.appendChild(p);
flex1.appendChild(img);
flex1.appendChild(container);
flex.appendChild(flex1);
  }
  // var button = document.createElement("button");
  // button.setAttribute("id","new");
}

})();
