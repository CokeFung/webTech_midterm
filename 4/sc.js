function addText(){

    var text = document.getElementById("num1").value;
    var atext = document.createTextNode(text);
    var par = document.createElement("p");
    par.appendChild(atext);
    document.body.appendChild(par);
}