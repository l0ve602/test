let randNo=0;
let userNo = document.getElementById("input-num");
let playButton = document.getElementById("play-button");
let resultText = document.getElementById("result-text");
let resetButton = document.getElementById("reset-button");
let chances = 5
let chancesNum = document.getElementById("chances-num")
let history =[]


playButton.addEventListener("click",play);
resetButton.addEventListener("click",reset)
userNo.addEventListener("focus",function(){
    userNo.value = ""
})
function pickNo(){
    randNo = Math.floor(Math.random()*100)+1
    console.log("정답",randNo)
}

function play(){
    let userValue = userNo.value
    if(userValue <1 || userValue >100){
        resultText.textContent = "1과 100사이의 숫자를 입력하세요."
        //console.log("범위 밖의 숫자 입니다.")
        return;
    }
    if(history.includes(userValue)){
        resultText.textContent ="이미 입력한 숫자 입니다. 다른 숫자를 입력해주세요."
        return;
    }

    chances --
    console.log("chances",chances)
    chancesNum.textContent = `남은기회:${chances}번`
    if(chances <1){
        playButton.disabled=true
    }

    if (userValue > randNo){
        //console.log("DOWN")
        resultText.textContent = "DOWN"
    }else if(userValue < randNo){
        //console.log("UP")
        resultText.textContent = "UP"
    }else {
        //console.log("정답입니다.")
        resultText.textContent = "정답입니다."
        playButton.disabled=true;
    }
   history.push(userValue)
    console.log(history)
    
    
   
}
function reset(){
    location.reload()
}

pickNo();

