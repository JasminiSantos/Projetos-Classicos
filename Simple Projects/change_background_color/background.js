var colors = ["blue","red","yellow","green","pink","orange","cyan","purple"];
function changeBackground(){
    var i = Math.round(Math.random()*colors.length);
    var background = document.querySelector('body');
    background.style.backgroundColor = colors[i];
    console.log("Funcionando");
}