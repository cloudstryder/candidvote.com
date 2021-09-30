// Axis in window url
const urlParams = new URLSearchParams(window.location.search);

// There will be more variables once we get new axis
var avg_axis = 0;
var numOfAxis = 0;
var userAxioms = [];
const NUMBER_OF_AXES = 5

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
    // var diffTemp = Math.abs(candidate["avgAxis"]-avg_axis); //total difference between candidate and user
    var diffTemp = 0;
    for(var i = 0; i < NUMBER_OF_AXES; i++) {
      diffTemp += Math.abs(candidate["avgAxis"]-userAxioms[i])
    }
    diffTemp /= NUMBER_OF_AXES;
  } else {
    var diffTemp = 0;
    for(var i = 0; i < NUMBER_OF_AXES; i++) {
      diffTemp += Math.abs(candidate["axioms"][i]-userAxioms[i])
    }
    diffTemp /= NUMBER_OF_AXES;
  }

  console.log(candidate["name"], diffTemp)
  //Add accuracy key to dict and push it sortedCandidates list;
  var candidateTemp = candidate;
  candidateTemp["accuracy"] = diffTemp;
  sortedCandidates.push(candidateTemp);
});

// Sort sortedCandidates by accuracy key
sortedCandidates.sort(function(a,b) {
    return a.accuracy - b.accuracy;
});


function displayValue(displayPercent) {
  switch (displayPercent.length) {
    case 4:
      return displayPercent.substring(0,2) + "." + displayPercent.substring(2,4)
    case 3:
      return displayPercent.charAt(0) + "." + displayPercent.substring(1,3)
    case 2:
      return "0." + displayPercent
    case 1:
      return "0.0" + displayPercent
    default: 
      return displayPercent
  }
}


function filter() {
  var zip = $("#zipfilter").val();
  $(".resultsHolder").html("");
  sortedCandidates.forEach(function(c){
    if(c.zip == zip || zip == "") {
      /* IMPORTANT */  
      var percentAccurate = ((1-(c["accuracy"]/20))*100); //percent match
      // effects ordering
      var stringPercentAccurate = (percentAccurate*100).toString()
      //display value
      var displayPercent = percentAccurate
      if (stringPercentAccurate.length > 4) {
        displayPercent = stringPercentAccurate.substring(0,2) + "." + stringPercentAccurate.substring(2,4)
      }
      switch (stringPercentAccurate.length) {
        case 4:
          displayPercent = stringPercentAccurate.substring(0,2) + "." + stringPercentAccurate.substring(2,4)
          break;
        case 3:
          displayPercent = stringPercentAccurate.charAt(0) + "." + stringPercentAccurate.substring(1,3)
          break;
        case 2:
          displayPercent = "0." + stringPercentAccurate
          break;
        case 1:
          displayPercent = "0.0" + stringPercentAccurate
          break;
        default: 
          displayPercent = displayPercent
          break;
      }
      if(percentAccurate > 80) {
        var htmlToAdd = '<div class="card w-75 border-primary"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b class="text-primary">'+displayPercent+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
      } else {
        var htmlToAdd = '<div class="card w-75"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b>'+displayPercent+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
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
    var percentAccurate = ((1 - c["accuracy"]/20)*100)
    var stringPercentAccurate = (percentAccurate*100).toString()
    //display value
    var displayPercent = percentAccurate
    if (stringPercentAccurate.length > 4) {
      displayPercent = stringPercentAccurate.substring(0,2) + "." + stringPercentAccurate.substring(2,4)
    }
    switch (stringPercentAccurate.length) {
    case 4:
      displayPercent = stringPercentAccurate.substring(0,2) + "." + stringPercentAccurate.substring(2,4)
      break;
    case 3:
      displayPercent = stringPercentAccurate.charAt(0) + "." + stringPercentAccurate.substring(1,3)
      break;
    case 2:
      displayPercent = "0." + stringPercentAccurate
      break;
    case 1:
      displayPercent = "0.0" + stringPercentAccurate
      break;
    default: 
      displayPercent = displayPercent
      break;
  }
    // displayPercent = percentAccurate

    console.log(displayPercent, percentAccurate)
    if ("website" in c) {
      if(percentAccurate > 80) {
        var htmlToAdd = '<div class="card w-75 border-primary"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b class="text-primary">'+displayPercent+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" style="padding-left: 15px" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
      } else {
        var htmlToAdd = '<div class="card w-75"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b>'+displayPercent+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" style="padding-left: 15px" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
      }
    }
    if ("links" in c) {
      if(percentAccurate > 80) {
        var htmlToAdd = '<div class="card w-75 border-primary"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b class="text-primary">'+displayPercent+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" style="padding-left: 15px" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a>';
      } else {
        var htmlToAdd = '<div class="card w-75"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b>'+displayPercent+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" style="padding-left: 15px" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a>';
      }
      htmlToAdd += '</div> </div>'
    }
    $(".resultsHolder").append(htmlToAdd);

  });

}


// former function for reference

// function userPercentageMatch(userAxioms, candidateAxioms) {
//   const AXIOM_RANGE = 20; 
//   var totalError = 0;
//   for(const key in Object.keys(userAxioms)) {
//       totalError += Math.abs(userAxioms[key] - candidateAxioms[key]);
//   }
//   var averageError = totalError/Object.keys(userAxioms).length;
//   var percentMatchRaw = averageError/AXIOM_RANGE;
//   var finalPercentMatch = (percentMatchRaw * 100).toFixed(2);
//   return finalPercentMatch;
// }
