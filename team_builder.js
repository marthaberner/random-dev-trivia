var students = [
  "April",
  "Aubrey",
  "Ben",
  "Brandon",
  "Bryce",
  "Chris",
  "Corey",
  "Helene",
  "Jess",
  "Josh Silverstein",
  "Joshua Sparks",
  "June",
  "Kinsey",
  "Maria",
  "Mike",
  "Mikel",
  "Nico",
  "Patrick D",
  "Patrick B",
  "Rachel",
  "Scott",
  "Sean",
  "Stu",
  "Taylor",
  "Teisia",
  "Tommy",
  "Tony"
]

var teams = [];
var team1 = [];
var team2 = [];
var team3 = [];
var team4 = [];
var team5 = [];
var team6 = [];
var team7 = [];
var length = students.length;
for (var i = 0; i < length; i++) {
  var randomIndex = Math.floor(Math.random()*students.length)
  if(i < 4) {
    team1.push(students[randomIndex]);
      students.splice(randomIndex,1);
  } else if (i < 8) {
    team2.push(students[randomIndex]);
      students.splice(randomIndex,1);
  } else if (i < 12) {
    team3.push(students[randomIndex]);
      students.splice(randomIndex,1);
  } else if (i < 16) {
    team4.push(students[randomIndex]);
      students.splice(randomIndex,1);
  } else if (i < 20) {
    team5.push(students[randomIndex]);
    students.splice(randomIndex,1);
  } else if (i < 24){
    team6.push(students[randomIndex]);
    students.splice(randomIndex,1);
  } else {
    team7.push(students[randomIndex]);
    students.splice(randomIndex,1);
  }
}

teams.push(team1);
teams.push(team2);
teams.push(team3);
teams.push(team4);
teams.push(team5);
teams.push(team6);
teams.push(team7);
console.log(teams);
