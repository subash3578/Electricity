const sampleForm = document.getElementById("details");
sampleForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  let form = e.currentTarget;

  var elements = document.getElementById("details").elements;
    var obj ={};
    for(var i = 0 ; i < elements.length ; i++){
        var item = elements.item(i);
        console.log(item.value);
        obj[item.name] = item.value;
}
console.log(obj);
const json=JSON.stringify(obj);
console.log(json);
try{console.log("this form is working");}
catch(error){
    console.error("error");
}

});