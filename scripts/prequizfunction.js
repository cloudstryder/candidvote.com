function quizWithZip() {
  var zips = ["12345"];
  var userZip = $("#zipcodeinput").val();
  if(!zips.includes(userZip)) {
    alert("Zip code not in list of approved zip codes.");
  } else {
    location.href = "quiz.html" + "?&zip=" + userZip;
  }
}

function quizWithoutZip() {
  location.href = "quiz.html" + "?&zip=0";
}
