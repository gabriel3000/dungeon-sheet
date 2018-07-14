console.log("welcome to the dungeon");
var dungeonForm = document.getElementById("ds-form"),
  dungeonFormInputs = document.getElementsByTagName("input"),
  dungeonFormTextareas = document.getElementsByTagName("textarea")
  dungeonData = "";

window.addEventListener("load",function(e){
  var data = queryStringToJSON(serializeDungeonForm(dungeonForm));
  getLocalStorage(data)
},false);

for(var i = 0; i < dungeonFormInputs.length; i++){
  dungeonFormInputs[i].addEventListener("blur",function(e){
    var data = queryStringToJSON(serializeDungeonForm(dungeonForm));
    setLocalStorage(data);
  });
  dungeonFormInputs[i].addEventListener("focus",function(e){
    var data = queryStringToJSON(serializeDungeonForm(dungeonForm));
    setLocalStorage(data);
  });
}

for(var i = 0; i < dungeonFormTextareas.length; i++){
  dungeonFormTextareas[i].addEventListener("blur",function(e){
    var data = queryStringToJSON(serializeDungeonForm(dungeonForm));
    setLocalStorage(data);
  });
  dungeonFormTextareas[i].addEventListener("focus",function(e){
    var data = queryStringToJSON(serializeDungeonForm(dungeonForm));
    setLocalStorage(data);
  });
}



dungeonForm.addEventListener("submit",function(e){
  e.preventDefault();

  var data = queryStringToJSON(serializeDungeonForm(dungeonForm));
  setLocalStorage(data);
}, false);

function setLocalStorage(vdata) {
  for (item in vdata) {
    var key = item;
    localStorage.setItem(key, vdata[item]);
  }
}

function getLocalStorage(vdata) {
  for (item in vdata) {
    var key = item;
    //console.log(key);
    var input = document.getElementsByName(key);
    if(document.getElementsByName(key)[0].tagName === "TEXTAREA"){
      document.getElementsByName(key)[0].value = localStorage.getItem(key);
    }
    else {
      document.getElementsByName(key)[0].setAttribute("value",localStorage.getItem(key))
    }
  }
}

function serializeDungeonForm(form){
   return serialize(form);
}

function queryStringToJSON(qs) {
    qs = qs || location.search.slice(1);

    var pairs = qs.split('&');
    var result = {};
    pairs.forEach(function(p) {
        var pair = p.split('=');
        var key = pair[0];
        var value = decodeURIComponent(pair[1] || '');

        if( result[key] ) {
            if( Object.prototype.toString.call( result[key] ) === '[object Array]' ) {
                result[key].push( value );
            } else {
                result[key] = [ result[key], value ];
            }
        } else {
            result[key] = value;
        }
    });

    return JSON.parse(JSON.stringify(result));
};
