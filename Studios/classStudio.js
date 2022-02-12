//Declare a class called CrewCandidate with a constructor that takes three parameters—name, mass, and scores. Note that scores will be an array of test results.

class CrewCandidate {

    constructor(name, mass, scores) {
      this.name = name;
      this.mass = mass;
      this.scores = scores;
    }
  
    addScore(newScore) {
      this.scores.push(newScore);
      return newScore;
    }
  
    average() {
      let total = 0;
      for (let i = 0; i < this.scores.length; i++) {
        total += this.scores[i];
      }
      return Math.round(total / this.scores.length * 10) / 10;
    }
  
    status() {
      let avg=this.average();
      if (avg >= 90) {
        return "Accepted";
      } else if (avg >= 80) {
        return "Reserve";
      } else if (avg >= 70) {
        return "Probationary";
      } else {
        return "Not accepted";
      }
    }
  }
  
  //candidates
  let candidate1 = new CrewCandidate("Bubba Bear", "135 kg", [88, 85, 90]);
  let candidate2 = new CrewCandidate("Merry Maltese", "1.5 kg", [93, 88, 97]);
  let candidate3 = new CrewCandidate("Glad Gator", "225 kg", [75, 78, 62]);

  //candidate average
  let candidate1Average= candidate1.average();
  let candidate2Average= candidate2.average();
  let candidate3Average= candidate3.average();
  
  //candidate status 
  let candidate1Status = candidate1.status();
  let candidate2Status = candidate2.status();
  let candidate3Status = candidate3.status();
  
  //Print Candidate Status
  let print1 = `${candidate1.name} earned an average test score of ${candidate1.average()} and has a status of ${candidate1Status}.`
  console.log(print1);
  
  let print2 = `${candidate2.name} earned an average test score of ${candidate2.average()} and has a status of ${candidate2Status}.`
  console.log(print2);
  
  let print3 = `${candidate3.name} earned an average test score of ${candidate3.average()} and has a status of ${candidate3Status}.`
  console.log(print3);
  
  
  //Part 4 - Use the methods to boost Glad Gator’s status to Reserve or higher. How many tests will it take to reach Reserve status? How many to reach Accepted? Remember, scores cannot exceed 100%.
  
  let testsToReserve = 0;
  let testsToAccepted = 0;
  
  while(candidate3.status() !=="Accepted"){
    if (candidate3.status()==="Probationary"){
      testsToReserve +=1;
    }
    testsToAccepted +=1;
    candidate3.addScore(100);
  }
  console.log("Tests til Reserve: " + testsToReserve)
  console.log("Tests til Accepted: " + testsToAccepted)