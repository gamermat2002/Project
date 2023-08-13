

//variable declaration  
let psum = 0
let csum = 0
let num = 0
let pscore = 0
let cscore = 0
let rock_img = image = `<center><img width="30%" src="img/rock.png" alt="..."></center>`
let paper_img = image = `<center><img width="30%"  src="img/papre.png" alt="..."></center>`
let scissor_img = image = `<center><img width="30%"  src="img/scissors.png" alt="..."></center>`


//point collection
let rounds = document.getElementById("rounds")
const inpbtn = document.getElementById("save")
inpbtn.addEventListener("click", function () {
 //  let val = parseInt(rounds.value)
     console.log(rounds.value)
   if (rounds.value < 21) {
      val=rounds.value
      console.log(val)
      }
    else {
      console.log("Cannot go more than 20 rounds")
   }
})

//uer input selection
function select1(){
   userval=0
   rounditerate()
}
function select2(){
   userval=1
   rounditerate()
}
function select3(){
   userval=2
   rounditerate()
}

//ramdom number  
function ramgenerator() {
   let ram = Math.floor(Math.random() * 3)
   return ram
}

//newgame
function newgame() {
   value1 = userval   
   console.log("user selected value"+value1)
   console.log("player1" + value1)
   value2 = ramgenerator()
   console.log("player2" + value2)

   sclk1()
}

//no of times rounds
function rounditerate() {
   console.log("No of rounds" + rounds.value) //rounds.value=i
   if (num < rounds.value) {
      num += 1
      newgame()
   } else {
      console.log("error")
   }
}

function sclk1() {
   if (value1 == 0) {
      pinp1 = document.getElementById("opt1").innerHTML = "Rock"
      img = document.getElementById("img").innerHTML = rock_img

   } else if (value1 == 1) {
      pinp2 = document.getElementById("opt1").innerHTML = "Paper"
      img = document.getElementById("img").innerHTML = paper_img

   } else if (value1 == 2) {
      pinp3 = document.getElementById("opt1").innerHTML = "Scissor"
      img = document.getElementById("img").innerHTML = scissor_img
   }

   if (value2 == 0) {
      cinp1 = document.getElementById("opt2").innerHTML = "Rock"
      img = document.getElementById("imgs").innerHTML = rock_img
   } else if (value2 == 1) {
      cinp2 = document.getElementById("opt2").innerHTML = "Paper"
      img = document.getElementById("imgs").innerHTML = paper_img
   } else if (value2 == 2) {
      cinp3 = document.getElementById("opt2").innerHTML = "Scissor"
      img = document.getElementById("imgs").innerHTML = scissor_img
   }

   grading()
}

//array declaration
let parry = []
let carry = []


function grading() {
   if (value1 == 0 && value2 == 0) {
      pscore = 0
      cscore = 0
   } else if (value1 == 0 && value2 == 1) {
      cscore = 1
      pscore = 0
   } else if (value1 == 0 && value2 == 2) {
      pscore = 1
      cscore = 0
   } else if (value1 == 1 && value2 == 0) {
      pscore = 1
      cscore = 0
   } else if (value1 == 1 && value2 == 1) {
      pscore = 0
      cscore = 0
   } else if (value1 == 1 && value2 == 2) {
      cscore = 1
      pscore = 0
   } else if (value1 == 2 && value2 == 0) {
      pscore = 1
      cscore = 0
   } else if (value1 == 2 && value2 == 1) {
      pscore = 1
      cscore = 0
   } else if (value1 == 2 && value2 == 2) {
      pscore = 0
      cscore = 0
   }

   psum = pscore
   console.log("player score=" + psum)
   csum = cscore
   console.log("player score=" + csum)
   //display round winner
   if(psum==1){
      document.getElementById("winner").innerHTML="Player 1 wins"
   }else if(csum==1){
      document.getElementById("winner").innerHTML="Player 2 wins"
   }
   else{
      document.getElementById("winner").innerHTML="Draw"
   }
   
   //pushing elements into the array
   parry.push(psum)

   carry.push(csum)
   // result()
   console.log(parry)
   console.log(carry)

   //added value player 1
   if (parry.length == rounds.value) {
      const win1sum = parry.reduce((accumulator, currentValue) => {
         return accumulator + currentValue
      }, 0)
      const win2sum = carry.reduce((accumulator, currentValue) => {
         return accumulator + currentValue
      }, 0)
      console.log("player 1 total points" + win1sum)
      console.log("player 2 total points" + win2sum)
      if (win1sum > win2sum) {
         console.log("pl wins")
         document.getElementById("winner").textContent = "Player 1 Wins the Game"
      } else if (win1sum < win2sum) {
         console.log("p2 wins")
         document.getElementById("winner").textContent = "player 2 Wins Game"
      } else {
         console.log("draw")
         document.getElementById("winner").textContent = "The round is Draw"
      }
   } else {
      console.log("omg")
   }
}

//new game inclick button
function newg() {
   window.location.reload();
}


