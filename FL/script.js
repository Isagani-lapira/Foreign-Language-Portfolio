var counter = 0;
function changeSem() {
  if (counter == 0) {
    document.getElementById("firstSem").style.display = "none";
    document.getElementById("secondSem").style.display = "block";
    counter = 1;
  } else {
    document.getElementById("firstSem").style.display = "block";
    document.getElementById("secondSem").style.display = "none";
    console.log("else");
    counter = 0;
  }
}
