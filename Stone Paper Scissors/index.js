
var num1 = Math.floor(Math.random() * 3) + 1; //1-3
var num2 = Math.floor(Math.random() * 3) + 1;
//stone --> 1
// paper -->2
//scissors -->3
document.querySelectorAll("img")[0].setAttribute("src", "images/"+num1+".png");
document.querySelectorAll("img")[1].setAttribute("src", "images/"+num2+".png");

//If player 1 wins
if ((num1==1 && num2==3)|| (num1==2 && num2==1)||(num1==3 && num2==2)) {
  document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
}
else if ((num1==3 && num2==1)|| (num1==1 && num2==2)||(num1==2 && num2==3)) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}
