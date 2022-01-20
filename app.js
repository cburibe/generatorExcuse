window.onload = function (){
document.querySelector('#excuse').innerHTML= generadorexcusa();
}

function generadorexcusa (){
let who = ['El gato','Mi papa','Su perro','Mi loro'];
let what = ['rompio','corrio','salto','comio'];
let when = ['por la mañana','ahora mismo','cuando termine','durnte mi colación','mientras yo estaba orando'];

let gowho = Math.floor(Math.random()*who.length);
let gowhat = Math.floor(Math.random()*what.length);
let gowhen = Math.floor(Math.random()*when.length);

return who[gowho] + ' ' + what[gowhat] + ' ' + when[gowhen];
}
