
var names = prompt("Enter Your Name");
function name(){
if(names.length<1){
    location.reload();
}else{
    const nameId = document.getElementById("name");
    nameId.innerHTML=`Hi ${names}`;
    const name1 = document.getElementById("name1");
    name1.innerHTML=`${names}`;
}
}

