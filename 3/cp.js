function changePic(){
    var p1 = document.getElementById("pic1");
    var p2 = document.getElementById("pic2");
    var p3 = document.getElementById("pic3");
    var p4 = document.getElementById("pic4");
    var tmp = document.getElementById("tmp");

    p1.src = p3.src;
    p3.src = p4.src;
    p4.src = p2.src;
    p2.src = tmp.src;
    tmp.src = p1.src;
}