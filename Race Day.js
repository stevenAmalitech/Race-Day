let raceNumber = Math.floor(Math.random() * 1000);

let registeredEarly = true;

let runnersAge = 121;

if (runnersAge > 18) {
  raceNumber += 1000;
}

if (runnersAge > 18 && registeredEarly) {
  console.log("You will race at 9:30 am.\n Race number: " + raceNumber);
} else if (runnersAge > 18 && !registeredEarly) {
  console.log("You will race at 11:00 am. \n Race number: " + raceNumber);
} else if (runnersAge < 18) {
  console.log("You will race at 12:30 am. \n Race number: " + raceNumber);
} else {
  console.log("See registration desk");
}
