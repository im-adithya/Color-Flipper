//gen random code
function genRandom(){
  var codeArr = ["#"];
  var constants = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
  for (let i=0;i<6;i++){
    codeArr.push(constants[Math.floor(Math.random()*constants.length)]);
  }
  return codeArr.join("");
}
const btn = document.getElementById("btn");
const color = document.querySelector(".code");

btn.addEventListener("click", function(){
  const codeName = genRandom();
  console.log(codeName);
  document.body.style.backgroundColor = codeName;
  color.textContent = codeName;
})
