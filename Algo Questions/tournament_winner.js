function tournamentWinner(competitions, results) {
    const myMap = new Map();
    let maxMatchesWon = Number.MIN_VALUE;
    let winner;
    for(let index in competitions){
        if(results[index] === 0){
            myMap.set(competitions[index][1], myMap.has(competitions[index][1]) ? myMap.get(competitions[index][1]) + 1 : 1); 
        }else{
            myMap.set(competitions[index][0], myMap.has(competitions[index][0]) ? myMap.get(competitions[index][0]) + 1 : 1); 
        }
    }
    for(let [key, value] of myMap.entries()){
        if(value > maxMatchesWon){
            maxMatchesWon = value;
            winner = key;
        }
    }

    // console.log(myMap.entries())
    return winner;
  }
  
  // Do not edit the line below.
  const competitions = [
    ["HTML", "C#"],
    ["C#", "Python"],
    ["Python", "HTML"]
  ]
  const results = [0, 0, 1]
  console.log(tournamentWinner(competitions, results));
  exports.tournamentWinner = tournamentWinner;