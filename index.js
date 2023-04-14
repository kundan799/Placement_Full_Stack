//1
let launchReady = false;
let fuelLevel = 17000;

if (fuellevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

// spelling mistak of fuellevel in if condition we can write fuelLevel
//<------------------------------------------------------------------------------------------------------------------------->


//2
let launch = false;
let Level = 17000;

if (Level >= 20000 {
   console.log('Fuel level cleared.');
   launch = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launch = false;
}
// closing bracket is missing in if condition we can write if(Level >= 20000)

//<------------------------------------------------------------------------------------------------->
//3
let launch = false;
let crew = true;
let computer = 'green';

if (crew &&& computer === 'green') {
   console.log('Crew & computer cleared.');
   launch = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launch = false;
}

if (launch) {
   console.log(("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");
   console.log("Fed parrot...");
   console.log("Ignition...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

// we can not write &&& codition like this we can write && .
//we can remove one opning bracket from this console  console.log(("10, 9, 8, 7, 6, 5, 4, 3, 2, 1..."); we can write like this console.log("10, 9, 8, 7, 6, 5, 4, 3, 2, 1...");

//<---------------------------------------------------------------------------------------------------------->
//4
let launchReady = false;
let fuelLevel = 27000;

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (launchReady) {
   console.log("10, 9, 8...");
   console.log("Fed parrot...");
   console.log("6, 5, 4...");
   console.log("Ignition...");
   consoul.log("3, 2, 1...");
   console.log("Liftoff!");
} else {
   console.log("Launch scrubbed.");
}

// spelling of this is wrong   consoul.log("3, 2, 1...")  we can write console.log("3, 2, 1...")
//<----------------------------------------------------------------------------------------------------------->
//5
let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = 'green';

if (fuelLevel >= 20000) {
   console.log('Fuel level cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Insufficient fuel!');
   launchReady = false;
}

if (crewStatus && computerStatus === 'green'){
   console.log('Crew & computer cleared.');
   launchReady = true;
} else {
   console.log('WARNING: Crew or computer not ready!');
   launchReady = false;
}

if (launchReady) {
   console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
   console.log('Liftoff!');
} else {
   console.log('Launch scrubbed.');
}
// nothing wrong in above code 