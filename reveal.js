function toggle(button){
    let articles = document.getElementsByTagName("article");
    let selected = articles[button-1];
    if(selected.style.display === "none"){
        reveal(selected);
        console.log("reveal "+button);
    }
    else{
        hide(selected);
        console.log("hide "+button);
    }

}

function reveal(art){
    art.style.display = "block";
}

function hide(art){
    art.style.display = "none";
}

function sayHi(){
  let user = prompt("Who are you?");
  alert("Hi "+user);
}
function change(elem){
  let test = document.getElementById(elem);
  console.log(test);
}
