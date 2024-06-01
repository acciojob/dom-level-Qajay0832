//your JS code here. If requir
let level=document.getElementById("level")
let result=0;

while (level.parentNode){
        level=level.parentNode;
        result+=1;
}
alert(`The level of the element is: ${result}`)