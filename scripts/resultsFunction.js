// Axis in window url
const urlParams = new URLSearchParams(window.location.search);

// There will be more variables once we get new axis
var avg_axis = 0;
var numOfAxis = 0;
var userAxioms = [];


/* IMPORTANT */

urlParams.forEach(function(param){ //calculates average user axis
  //add user axioms to array
  userAxioms.push(param)
  if(parseInt(param) < 50) { //this is rlly sloppy will fix later
    // order of params: pwt, ee, si, pb, h
    console.log(param)
    avg_axis += parseInt(param); 
    numOfAxis += 1;
  } else {
    usrZip = param;
  }
});
avg_axis = avg_axis/numOfAxis; //avg axis of user
console.log(userAxioms)



// Fill sortedCandidates with objs and accuracy key
var sortedCandidates = [];
candidateResults.forEach(function(candidate){
  /* IMPORTANT */
  if ("avgAxis" in candidate) {
    var diffTemp = Math.abs(candidate["avgAxis"]-avg_axis); //total difference between candidate and user
  } else {
    var diffTemp = 0;
    for(var i = 0; i < 5; i++) {
      diffTemp += Math.abs(candidate["axioms"][i]-userAxioms[i])
    }
    diffTemp /= 5;
  }
  //Add accuracy key to dict and push it sortedCandidates list;
  var candidateTemp = candidate;
  candidateTemp["accuracy"] = diffTemp;
  sortedCandidates.push(candidateTemp);
});

// Sort sortedCandidates by accuracy key
sortedCandidates.sort(function(a,b) {
    return a.accuracy - b.accuracy;
});

function filter() {
  var zip = $("#zipfilter").val();
  $(".resultsHolder").html("");
  sortedCandidates.forEach(function(c){
    if(c.zip == zip || zip == "") {
      /* IMPORTANT */ 
      //STILL NEEDS TO BE UPDATED
      // if ("avgAxis" in c) {
        var percentAccurate = parseInt(((1-c["accuracy"]/20)*100).toFixed(2)); //takes error, multiplies by 5, and subtracts from 100
      if(percentAccurate > 85) {
        var htmlToAdd = '<div class="card w-75 border-primary"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b class="text-primary">'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
      } else {
        var htmlToAdd = '<div class="card w-75"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b>'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
      }
      $(".resultsHolder").append(htmlToAdd);
    }

  });
}

// Loop through sortedCandidates and append them all to page
window.onload = function() {

  if(parseInt(usrZip) > 0) {
    $(".resultContainer").append("<h4 class='text-primary'>Showing localized results</h4>");
  }

  sortedCandidates.forEach(function(c){
    /* IMPORTANT */ //still need to change this, percent accurate is the actual % match from difference index
    var percentAccurate = parseInt(100-c["accuracy"]*5);

    if(percentAccurate > 85) {
      var htmlToAdd = '<div class="card w-75 border-primary"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b class="text-primary">'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" style="padding-left: 15px" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text" >'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
    } else {
      var htmlToAdd = '<div class="card w-75"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b>'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" style="padding-left: 15px" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
    }
    $(".resultsHolder").append(htmlToAdd);

  });

}


function userPercentageMatch(userAxioms, candidateAxioms) {
  const AXIOM_RANGE = 20; //total range axiom can take, so in this case from  -10 to 10
  var totalError = 0;
  for(const key in Object.keys(userAxioms)) {
      totalError += Math.abs(userAxioms[key] - candidateAxioms[key]);
  }
  var averageError = totalError/Object.keys(userAxioms).length;
  var percentMatchRaw = averageError/AXIOM_RANGE;
  var finalPercentMatch = (percentMatchRaw * 100).toFixed(2);
  return finalPercentMatch;
}
