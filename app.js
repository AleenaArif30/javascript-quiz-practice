
var i = 0 ;
while(i<4){
    document.write(i + "<br>")
    i++;
}

document.write("<br>")
document.write("<br>") 
document.write("<br>")


var i = 5;
do{
    document.write(i +"<br>")
    i++;
} while(i<10);

document.write("<br>")
document.write("<br>") 
document.write("<br>")



var mess = "hello world";
console.log(mess)

function zoom(e){
     e.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqGK3diR3Zi-mnOXEaj-3ewmFyRYVxGzVzZw&s"
  
}
function same(e){
    e.src = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxlT_-PpQJbt3DsWOZDQYohRy4YF8ck1n8PA&s"
}


function zoomin(e){
    e.style.transform = "scale(1.5)"
}
function zoomout(e){
    e.style.transform = "scale(1)"
}

function color(e){
 e.style.backgroundColor = "purple"
}


function chekadd(field){
  var email =   document.getElementById(field).value
  
  if(email ===""){
    alert("email is required")
  }
}


function invisible(){
    document.getElementById("img").className = "hidden"
}


function link(){
    var link = document.getElementById("link")
    link.href = "https://www.alkaramstudio.com/collections/unstitched-sale-1?srsltid=AfmBOoqaaZkAw1w9OzJC1qhuuYkMA5dv8fGX_huODnDcx-jDU-bWOxza"
}

var par = document.getElementsByTagName("p")
var middle = par[1].innerHTML 
par[1].innerHTML = "this is ok"


for (i=0 ;i<par.length;i++ ){
    par[i].style.color = "blue"
}



console.log(document.childNodes[1].childNodes[2].childNodes)