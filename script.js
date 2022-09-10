class AlienShip {
     constructor(name, hull, firepower, accuracy) {
          this.name = name;
          this.hull = Math.floor(Math.random() * 4) + 3;
          this.firepower = Math.floor(Math.random() * 3) + 2;
          this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
     }
}

const aliens = [
     new AlienShip('alien Level 1'),
     new AlienShip('alien Level 2'),
     new AlienShip('alien Level 3'),
     new AlienShip('alien Level 4'),
     new AlienShip('alien Level 5')
]
console.log(aliens);
const uss_sch = {
     name: "USS_Sz",
     hull: 20,
     firepower: 5,
     accuracy: .7,
     fullName: function () {
          return name + " " + hull;
     },
     nextAlien(aliens) {
          this.alien = aliens[0]

          if (aliens[0].hull <= 0) {
               aliens.shift()
     }
     }
}
console.log(uss_sch);
let result;
let message;
let alienMessage;
let ussMessage;
const usStatus =()=>{ 
          ussMessage = console.log("You now have " + uss_sch.hull + " hull");
          ussMessage
     }
const alienStatus=()=>{ 
          alienMessage = console.log("The alien has " + aliens.hull + " hull");
          alienMessage

     }
     

let welcome = "The game has started";
function startFiring() {


     if (Math.random() < uss_sch.accuracy) {
          result = 'hit';
          aliens.hull -= uss_sch.firepower
          if (aliens.hull > 0) {
               message = "You've hit, but the alien survived...would you like to retreat?"
               welcome 
               ussMessage 
               alienMessage 


               console.log(aliens);
          } else {
               message = "You've hit and finished off the alien"
               welcome 
               ussMessage
               alienMessage 
               uss_sch.nextAlien(aliens)
               console.log(aliens);
          }

     } else {
          result = 'miss';
          message = "you missed the alien. Do you want to retreat." ;
          ussMessage 
          alienMessage
          welcome
          console.log(aliens);
     }
const messageContainer = document.querySelector('h4');
messageContainer.innerHTML = message
const welcomeUpdateContainer = document.querySelector('.classy')
welcomeUpdateContainer.innerHTML = welcome;
}
const fireBtn = document.getElementById("fire");
fireBtn.addEventListener('click', startFiring);



const usMessageDiv = document.getElementsByClassName("us-status");
usMessageDiv.textContent = usMessageDiv
const addDiv = (usMessageDiv)=> {
     usMessageDiv
}


const usStatusButton = document.querySelector("#us-status-btn");
console.log(usMessageDiv);
// usStatusButton.appendChild(usMessageDiv);


// console.log(usStatusMessage);
//hopefully it works
usStatusButton.addEventListener('click',addDiv)