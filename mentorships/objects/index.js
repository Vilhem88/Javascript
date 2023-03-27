class User {
  points = [];
  currentPoint = 0;
  totalPoints = 0
  constructor(_name, _email) {
    this.name = _name;
    this.email = _email;
  }

  addPoint(point) {
    this.points.push(point);
    this.totalPoints += point
    this.currentPoint = this.points.slice(-1);
    return `Current point ${this.currentPoint}`;
  }

  showNameAndPoints() {
    if (this.points.length == 0) {
      return `${this.name} Points: no Points to show`;
    }
    return `${this.name} Points: ${this.points.toString()}`;
  }

  changeEmail(newEmail) {
    this.email = newEmail;
  }

}

let user1 = new User("John", "doe@example.com");
user1.addPoint(3000);
user1.addPoint(50);
user1.changeEmail("newemail@hotmail.com");

let user3 = new User("John", "doe@example.com");
user3.addPoint(300);
user3.addPoint(50);

let user4 = new User("John", "doe@example.com");
user4.addPoint(3);
user4.addPoint(10);

let user2 = new User("Smith", "smith@example.com");

const parentDiv = document.getElementById("parentDiv");
const btnMail = document.getElementById("btnMail");
const email = document.getElementById("email");
const winnerBtn = document.getElementById("winnerBtn");

var arrUsers = [user1, user2, user3, user4];

arrUsers.forEach((user) => {
  parentDiv.innerHTML += `<div>${user.showNameAndPoints()}</div><br>`;
});

btnMail.addEventListener("click", handleEmailChange);

function handleEmailChange(e) {
  let hasErr = false;
  if (email.value.trim() == "") {
    hasErr = true;
  } else {
    let user = arrUsers[1];
    user.changeEmail(email.value);
    parentDiv.innerHTML += `<div>${user.name} has changed the email to ${email.value}</div><br>`;
  }
  email.value = "";
}

winnerBtn.addEventListener("click", handleWinnerBtn);
function handleWinnerBtn() {
    
    var winnerName = user1.name
    var winnerPoints = user1.totalPoints

    if(winnerPoints < user2.totalPoints){
        var winnerName = user2.name
        var winnerPoints = user2.totalPoints
    
    }
    
    if(winnerPoints < user3.totalPoints){
        var winnerName = user3.name
        var winnerPoints = user3.totalPoints
    }

    parentDiv.innerHTML += `<div>${winnerName} is the winner with max: ${winnerPoints} points</div><br>`;

}
