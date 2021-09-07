// Axis in window url
const urlParams = new URLSearchParams(window.location.search);

// There will be more variables once we get new axis
var avg_axis = 0;
var numOfAxis = 0;


urlParams.forEach(function(param){
  if(parseInt(param) < 50) { //this is rlly sloppy will fix later
    // order of params: pwt, ee, si, pb, h
    console.log(param)
    avg_axis += parseInt(param);
    numOfAxis += 1;
  } else {
    usrZip = param;
  }
});

avg_axis = avg_axis/numOfAxis;

// Fill sortedCanidates with objs and accuracy key
var sortedCanidates = [];
canidateResults.forEach(function(canidate){
  var diffTemp = Math.abs(canidate["avgAxis"]-avg_axis); //difference 

  //Add accuracy key to dict and push it sortedCanidates list;
  var canidateTemp = canidate;
  canidateTemp["accuracy"] = diffTemp;
  sortedCanidates.push(canidateTemp);
});

// Sort sortedCanidates by accuracy key
sortedCanidates.sort(function(a,b) {
    return a.accuracy - b.accuracy;
});

function filter() {
  var zip = $("#zipfilter").val();
  $(".resultsHolder").html("");
  sortedCanidates.forEach(function(c){
    if(c.zip == zip || zip == "") {
      var percentAccurate = parseInt(100-c["accuracy"]*5);

      if(percentAccurate > 85) {
        var htmlToAdd = '<div class="card w-75 border-primary"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b class="text-primary">'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
      } else {
        var htmlToAdd = '<div class="card w-75"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b>'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
      }
      $(".resultsHolder").append(htmlToAdd);
    }

  });
}

// Loop through sortedCanidates and append them all to page
window.onload = function() {

  if(parseInt(usrZip) > 0) {
    $(".resultContainer").append("<h4 class='text-primary'>Showing localized results</h4>");
  }

  sortedCanidates.forEach(function(c){
    var percentAccurate = parseInt(100-c["accuracy"]*5);

    if(percentAccurate > 85) {
      var htmlToAdd = '<div class="card w-75 border-primary"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b class="text-primary">'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
    } else {
      var htmlToAdd = '<div class="card w-75"> <div class="card-body"> <h5 class="card-title">'+c["name"]+' <b>'+percentAccurate+'% Match</b></h5> <img class="card-img" src="'+c["image"]+'" alt="Card image cap"> <strong class="card-text">'+c["election"]+'</strong> <p class="card-text">'+c["text"]+'</p> <p>Zip code: '+c["zip"]+'</p> <a href="'+c["website"]+'" class="btn btn-primary">Learn More</a> </div> </div>';
    }
    $(".resultsHolder").append(htmlToAdd);

  });

}
