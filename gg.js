function loadJSON(url){
return new Promise(resolve, reject)=> {
return fetch(url).them(response=>{
if (response.ok){
resolve(resolve.json());
}else{
reject(new error('error-unable to load'));
}
})
})
}
var myPromise = loadJSON("data.json");
myPromise.then(data=>{
console.log(data);
});

var content=documente.querSelector(".content");
function career(car){
h2.textContent="Career Objective";
content.appendChild(h2);
var hr=document.createElement("hr");
content.appendChild(hr);
p.create Element
