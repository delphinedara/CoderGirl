//  Studio: Objects & Math

// candidates
  let candidateA = {
    'name': 'Gordon Shumway',
    'species': 'alf',
    'mass': 90,
    'o2Used': function(hrs) { return 0.035 * hrs },
    'astronautID': 414
  };
  let candidateB = {
    'name': 'Lassie',
    'species': 'dog',
    'mass': 19.1,
    'o2Used': function(hrs) { return 0.030 * hrs },
    'astronautID': 503
  };
  let candidateC = {
    'name': 'Jonsey',
    'species': 'cat',
    'mass': 3.6,
    'o2Used': function(hrs) { return 0.022 * hrs },
    'astronautID': 796
  };
  let candidateD = {
    'name': 'Paddington',
    'species': 'bear',
    'mass': 31.8,
    'o2Used': function(hrs) { return 0.047 * hrs },
    'astronautID': 291
  };
  let candidateE = {
    'name': 'Pete',
    'species': 'tortoise',
    'mass': 417,
    'o2Used': function(hrs) { return 0.010 * hrs },
    'astronautID': 599
  };
  let candidateF = {
    'name': 'Hugs',
    'species': 'ball python',
    'mass': 2.3,
    'o2Used': function(hrs) { return 0.018 * hrs },
    'astronautID': 890
  };
  
  //animal array
  let animals = [candidateA, candidateB, candidateC, candidateD, candidateE, candidateF];

//Part A--

function selectRandomEntry(arr) {
    let index = Math.floor(Math.random() * arr.length);
    return arr[index];
  }
  
  let idNumbers = [291, 414, 503, 599, 796, 890];
  
  //console.log(selectRandomEntry (idNumbers))
  
  function selectThreeCrewMembers(arr) {
    let crewArr = [];
  
    while (crewArr.length < 3) {
      let crewMemberId = selectRandomEntry(arr);
      if (!crewArr.includes(crewMemberId)) {
        crewArr.push(crewMemberId);
      }
    }
    return crewArr;
  }
  
  const selectedIdNumbers = selectThreeCrewMembers(idNumbers);
  
  
  function buildCrewArr(selectedIdNumbers, candidates) {
    let selectedCrew = [];
    for (let i = 0; i < candidates.length; i++) {
      if (selectedIdNumbers.includes(candidates[i].astronautID)) {
        selectedCrew.push(candidates[i]);
      }
    }
    return selectedCrew;
  }

  
  let selectedAnimals = buildCrewArr(selectedIdNumbers, animals);

  let animalName1 = selectedAnimals[0].name;
  let animalName2 = selectedAnimals[1].name;
  let animalName3 = selectedAnimals[2].name;
  
  console.log(`${animalName1},${animalName2}, and ${animalName3} are going to space! `)
  
// Part B----
function orbitCircumference(radius) {
    let circumference = 2 * Math.PI * radius;
    return Math.round(circumference);
  }
  
  function missionDuration(OrbitsCompleted, orbitRadius, orbitSpeed) {
    let distance = orbitCircumference(orbitRadius) * OrbitsCompleted;
    let time = Math.round((distance / orbitSpeed) * 100) / 100;
    console.log(`The mission will travel ${distance} km around the planet, and it will take ${time} hours to complete.`);
  
    return time;
  
  }

function oxygenExpended(candidate, duration) {
    let oxygenUsed = Math.round((candidate.o2Used(duration)) * 1000) / 1000;
    return `${candidate.name} will perform the spacewalk, which will last ${duration} hours and require ${oxygenUsed} kg of oxygen.`
  }
  
let crew = [candidateA, candidateC, candidateE];

oxygenExpended(selectRandomEntry(crew),missionDuration(5, 2000,28000));
  

//Part C ----

function crewMass(selectedCrew){
    let totalMass = 0;
    
    for (let i=0;i<selectedCrew.length; i++){
      totalMass += selectedCrew[i].mass;
    }
    return (Math.round(totalMass/10)*10);
  }
  

  function fuelRequired(selectedCrew){
    let totalMass = 75000+crewMass(selectedCrew);
    let fuel =totalMass*9.5;
    for (let i=0; i<selectedCrew.length; i++){
      if (selectedCrew[i].species ==='dog' || selectedCrew[i].species==='cat'){
        fuel+=200;
      }else{
        fuel+=100;
      }
    }
    return Math.round(fuel);
  }
  
  let selectedCrew = [candidateB,candidateD,candidateF];

  console.log(`The mission has a launch mass of ${crewMass(crew)} kg and requires ${fuelRequired(crew)} kg of fuel.'`)
  
gi