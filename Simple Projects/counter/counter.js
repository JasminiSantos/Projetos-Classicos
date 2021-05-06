var sum = document.getElementById("number").textContent;
function addCount(){
    sum++;
    document.getElementById("number").textContent = sum;
}
function lowerCount(){
    sum--;
    document.getElementById("number").textContent = sum;
}