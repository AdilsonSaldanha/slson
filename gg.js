/*
function loadJSON(url, callback) {
  const xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET", url, true);
  xhr.onreadystatechange = function() {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === "200") {
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
//var url = "https://jaganmohangumpa.github.io/resume/resources/data.json";
//usage:
loadJSON("api-data/data.json", function(text) {
  let data = JSON.parse(text);
  console.log(data);
});
*/

function loadJSON(url){
  return new Promise( (resolve, reject) => {
    return fetch(url).then( response => {
      if (response.ok) {
        resolve(response.json());
      } else {
        reject(new Error('error - unable to load JSON'));
      }
    })
  })
}

var myPromise = loadJSON("main.json");

myPromise.then( data => {
  console.log(data);
  career(data.career);
} );

var content=document.querySelector(".content");

function career(car){
  var h3=document.createElement("h3");
  h3.textContent="Career Objective.";
  content.appendChild(h3);

  var hr=document.createElement("hr");
  content.appendChild(hr);

  var p=document.createElement("p");
  p.textContent=car.data;
  content.appendChild(p);
}
